import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';
import LandingPage from './pages/LandingPage';
import Challenges from './pages/Challanges/Challenges';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import {CHALLENGE_PAGE, CHALLENGES_PAGE, IS_MOBILE} from './utils/globals';
import Challenge from './pages/Challenge';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import LoginWithEmail from './pages/auth/LoginWithEmail';
import RegisterWithEmail from './pages/auth/RegisterWithEmail';
import KeyCloakService from './services/KeyCloakService';
import React from 'react';
import LoggedBar from './components/navigation/LoggedBar';
import addUser from './api/addUser';
import Loading from './components/generic/Loading';
import {FlexColumn} from './utils/containers';
import PopupMessage from './components/generic/PopupMessage';

const App = () => {
    const [loggedBarVisible, setLoggedBarVisible] = React.useState('100vw');
    const [loggedBarHover, setLoggedBarHover] = React.useState(false);
    const [popUpHeader, setPopUpHeader] = React.useState('');
    const [popUpMessage, setPopUpMessage] = React.useState('');

    React.useEffect(() => {
        if (sessionStorage.getItem('logged') !== 'yes') {
            if (KeyCloakService.isLoggedIn()) {
                sessionStorage.setItem('logged', 'yes');
                addUser();
            }
        }

        setTimeout(() => {
            if (sessionStorage.getItem('logged') === 'yes') {
                if (!KeyCloakService.isLoggedIn()) {
                    KeyCloakService.doLogin();
                }
            }
        }, 1500);
    });

    const popUpMessageHandler = (header, message) => {
        setPopUpHeader(header);
        setPopUpMessage(message);
    };

    const popUpMessageRender = () => {
        if (popUpHeader !== '' || popUpMessage !== '') {
            return (
                <PopupMessage header={popUpHeader} message={popUpMessage} popUpMessageHandler={popUpMessageHandler}/>
            );
        }
    };

    const loggedBarVisibleHandler = () => {
        if (loggedBarVisible === '0' && !loggedBarHover)
            setLoggedBarVisible('100vw');
        else setLoggedBarVisible('0');
    };

    const loggedBarHoverTrue = () => {
        setLoggedBarHover(true);
    };

    const loggedBarHoverFalse = () => {
        setLoggedBarHover(false);
    };

    const renderApp = () => {
        return (
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    {popUpMessageRender()}
                    <NavBar loggedBarVisibleHandler={loggedBarVisibleHandler}/>
                    {!IS_MOBILE() ?
                        <LoggedBar visible={loggedBarVisible} loggedBarVisibleHandler={loggedBarVisibleHandler}
                                   loggedBarHoverTrue={loggedBarHoverTrue}
                                   loggedBarHoverFalse={loggedBarHoverFalse}
                                   username={KeyCloakService.getUsername()}/> : ''}
                    <Routes>
                        <Route path='/register-email' element={<RegisterWithEmail/>}/>
                        <Route path='/login-email' element={<LoginWithEmail/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>
                        <Route path={`${CHALLENGE_PAGE}/:challengeId`}
                               element={<Challenge popUpMessageHandler={popUpMessageHandler}/>}/>
                        <Route path={CHALLENGES_PAGE} element={<Challenges/>}/>
                        {
                            KeyCloakService.isLoggedIn() ? <>
                                <Route exact path='/' element={<Challenges/>}/>
                                <Route element={<Challenges/>}/>
                            </> : <>
                                <Route exact path='/' element={<LandingPage/>}/>
                                <Route element={<LandingPage/>}/>
                            </>
                        }
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
                    <FlexColumn width='100vw' height='100vh'>
                        <Loading/>
                    </FlexColumn>
                </ThemeProvider>
            );
        }
    } else {
        return renderApp();
    }
};

export default App;
