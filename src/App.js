import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import LandingPage from './pages/LandingPage';
import Challenges from './pages/Challanges/Challenges';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import {
  CHALLENGE_PAGE,
  CHALLENGES_PAGE,
  IS_MOBILE,
  POLICY_PRIVACY_PAGE,
  LOGIN_REQUIRED_PAGES,
  ROOT_URL,
  CHALLENGE_SECTIONS,
} from './utils/globals';
import KeyCloakService from './services/KeyCloakService';
import React from 'react';
import LoggedBar from './components/navigation/LoggedBar';
import addUser from './api/addUser';
import Loading from './components/generic/Loading';
import { FlexColumn } from './utils/containers';
import PopupMessage from './components/generic/PopupMessage';
import PolicyPrivacy from './pages/PolicyPrivacy';
import Challenge from './pages/Challenge';

const App = () => {
  const [loggedBarVisible, setLoggedBarVisible] = React.useState('100vw');
  const [loggedBarHover, setLoggedBarHover] = React.useState(false);
  const [popUpHeader, setPopUpHeader] = React.useState('');
  const [popUpMessage, setPopUpMessage] = React.useState('');
  const [confirmPopUpHandler, setConfirmPopUpHandler] = React.useState(null);

  React.useMemo(() => {
    if (sessionStorage.getItem('logout') === 'yes') {
      const pageName = window.location.pathname.split('/').at(-1);
      if (LOGIN_REQUIRED_PAGES.includes(pageName)) {
        window.location.replace(`${ROOT_URL}/challenges`);
      }
    }

    if (sessionStorage.getItem('logged') !== 'yes') {
      if (KeyCloakService.isLoggedIn()) {
        sessionStorage.setItem('logged', 'yes');
        addUser();
      }
    }

    if (
      sessionStorage.getItem('logged') === 'yes' &&
      (window.location.pathname === `${POLICY_PRIVACY_PAGE}/login` ||
        window.location.pathname === `${POLICY_PRIVACY_PAGE}/register`)
    ) {
      window.location.replace(`${ROOT_URL}/challenges`);
    }

    setTimeout(() => {
      if (sessionStorage.getItem('logged') === 'yes') {
        if (!KeyCloakService.isLoggedIn()) {
          KeyCloakService.doLogin();
        }
      }
    }, 1500);
  }, []);

  const popUpMessageHandler = (header, message, confirmHandler) => {
    setPopUpHeader(header);
    setPopUpMessage(message);
    if (confirmHandler !== null && confirmHandler !== undefined) {
      setConfirmPopUpHandler(() => confirmHandler());
    } else {
      setConfirmPopUpHandler(null);
    }
  };

  const popUpMessageRender = () => {
    if (popUpHeader !== '' || popUpMessage !== '') {
      return (
        <PopupMessage
          header={popUpHeader}
          message={popUpMessage}
          confirmHandler={confirmPopUpHandler}
          popUpMessageHandler={popUpMessageHandler}
        />
      );
    }
  };

  const loggedBarVisibleHandler = React.useCallback(() => {
    if (loggedBarVisible === '0' && !loggedBarHover)
      setLoggedBarVisible('100vw');
    else setLoggedBarVisible('0');
  }, [loggedBarHover, loggedBarVisible]);

  const renderApp = () => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {popUpMessageRender()}
          <NavBar
            loggedBarVisibleHandler={loggedBarVisibleHandler}
            popUpMessageHandler={popUpMessageHandler}
          />
          {!IS_MOBILE() && (
            <LoggedBar
              visible={loggedBarVisible}
              loggedBarVisibleHandler={loggedBarVisibleHandler}
              loggedBarHoverTrue={() => setLoggedBarHover(true)}
              loggedBarHoverFalse={() => setLoggedBarHover(false)}
              username={KeyCloakService.getUsername()}
            />
          )}
          <Routes>
            <Route
              path={`${CHALLENGE_PAGE}/:challengeId`}
              element={<Challenge section={CHALLENGE_SECTIONS.LEADERBOARD} />}
            />
            <Route
              path={`${CHALLENGE_PAGE}/:challengeId/leaderboard`}
              element={<Challenge section={CHALLENGE_SECTIONS.LEADERBOARD} />}
            />
            <Route
              path={`${CHALLENGE_PAGE}/:challengeId/allentries`}
              element={<Challenge section={CHALLENGE_SECTIONS.ALL_ENTRIES} />}
            />
            <Route
              path={`${CHALLENGE_PAGE}/:challengeId/readme`}
              element={<Challenge section={CHALLENGE_SECTIONS.README} />}
            />
            <Route
              path={`${CHALLENGE_PAGE}/:challengeId/howto`}
              element={
                <Challenge
                  popUpMessageHandler={popUpMessageHandler}
                  section={CHALLENGE_SECTIONS.HOW_TO}
                />
              }
            />
            <Route
              path={`${CHALLENGE_PAGE}/:challengeId/myentries`}
              element={<Challenge section={CHALLENGE_SECTIONS.MY_ENTRIES} />}
            />
            <Route
              path={`${CHALLENGE_PAGE}/:challengeId/submit`}
              element={<Challenge section={CHALLENGE_SECTIONS.SUBMIT} />}
            />
            <Route path={CHALLENGES_PAGE} element={<Challenges />} />
            <Route
              path={POLICY_PRIVACY_PAGE}
              element={
                <PolicyPrivacy popUpMessageHandler={popUpMessageHandler} />
              }
            />
            <Route
              path={`${POLICY_PRIVACY_PAGE}/login`}
              element={
                <PolicyPrivacy
                  popUpMessageHandler={popUpMessageHandler}
                  beforeLogin
                />
              }
            />
            <Route
              path={`${POLICY_PRIVACY_PAGE}/register`}
              element={
                <PolicyPrivacy
                  popUpMessageHandler={popUpMessageHandler}
                  beforeRegister
                />
              }
            />
            {KeyCloakService.isLoggedIn() ? (
              <>
                <Route exact path="/" element={<Challenges />} />
                <Route element={<Challenges />} />
              </>
            ) : (
              <>
                <Route
                  exact
                  path="/"
                  element={
                    <LandingPage popUpMessageHandler={popUpMessageHandler} />
                  }
                />
                <Route
                  element={
                    <LandingPage popUpMessageHandler={popUpMessageHandler} />
                  }
                />
              </>
            )}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    );
  };

  if (sessionStorage.getItem('logged') === 'yes') {
    if (KeyCloakService.isLoggedIn()) {
      return renderApp();
    } else {
      return (
        <ThemeProvider theme={theme}>
          <FlexColumn width="100vw" height="100vh">
            <Loading />
          </FlexColumn>
        </ThemeProvider>
      );
    }
  } else {
    return renderApp();
  }
};

export default App;
