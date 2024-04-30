import { Route, Routes } from 'react-router-dom';
import {
    CHALLENGES_PAGE,
    CHALLENGE_CREATE_PAGE,
    CHALLENGE_PAGE,
    CHALLENGE_SECTIONS,
    LOGIN_PAGE,
    POLICY_PRIVACY_PAGE,
    PROFILE_PAGE,
    REGISTER_PAGE,
    USE_PREVIOUS,
    CHALLENGE_CREATE_HOW_TO_PAGE, EDIT_PROFILE_PAGE,
} from '../../utils/globals';
import Challenge from '../../pages/Challenge';
import Challenges from '../../pages/Challanges';
import PolicyPrivacy from '../../pages/PolicyPrivacy';
import LandingPage from '../../pages/LandingPage';
import Profile from '../../pages/Profile/Profile';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import ChallengeCreate from '../../pages/ChallengeCreate/ChallengeCreate';
import LoginPage from '../../pages/auth/LoginPage';
import RegisterPage from '../../pages/auth/RegisterPage';
import { useSelector } from 'react-redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RESET_TOKEN_TIME, REDIRECT_TO_ROOT_PAGE } from '../../utils/globals';
import LOCAL_STORAGE from '../../utils/localStorage';
import { useDispatch } from 'react-redux';
import { logIn, logOut } from '../../redux/authSlice';
import auth from '../../api/auth';
import AdminPanel from '../../pages/AdminPanel/AdminPanel';
import ChallengeCreateHowTo from '../../pages/ChallengeCreateHowTo';
import EditProfile from "../../pages/EditProfile/EditProfile";

const RoutingManager = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [authResult, setAuthResult] = React.useState(null);
  const prevAuthResult = USE_PREVIOUS(authResult);

  React.useEffect(() => {
    const logInTime = localStorage.getItem(LOCAL_STORAGE.LOG_IN_TIME);
    if (logInTime) {
      const timeNow = Date.now();
      const sessionTime = timeNow - logInTime;
      if (sessionTime > RESET_TOKEN_TIME) {
        dispatch(
          logOut({ redirectToRootPage: () => REDIRECT_TO_ROOT_PAGE(navigate) })
        );
      }
    }
  }, [dispatch, navigate]);

  React.useEffect(() => {
    const authToken = localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN);
    if (authToken) {
      auth(authToken, setAuthResult);
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (authResult?.User !== prevAuthResult?.User) {
      const auth = authResult?.User;
      const authToken = localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN);
      if (auth?.username && authToken) {
        dispatch(
          logIn({ user: auth.username, token: authToken, sessionReload: true })
        );
      } else if (auth?.detail) {
        dispatch(
          logOut({ redirectToRootPage: () => REDIRECT_TO_ROOT_PAGE(navigate) })
        );
      }
    }
  }, [authResult, dispatch, navigate, prevAuthResult?.User]);

  const logInRoutesRender = () => {
    if (loggedIn) {
      return (
        <>
          {/* <Route
            path={`/submission/:challengeId/:submissionId`}
            element={<Submission />}
          /> */}
          <Route
            path={`${CHALLENGE_PAGE}/:challengeId/settings`}
            element={<Challenge section={CHALLENGE_SECTIONS.SETTINGS} />}
          />
          <Route path={`/admin-panel`} element={<AdminPanel />} />
          <Route
            path={`${CHALLENGE_PAGE}/:challengeId/myentries`}
            element={<Challenge section={CHALLENGE_SECTIONS.MY_ENTRIES} />}
          />
          <Route
            path={`${CHALLENGE_PAGE}/:challengeId/submit`}
            element={<Challenge section={CHALLENGE_SECTIONS.SUBMIT} />}
          />
          <Route path={PROFILE_PAGE} element={<Profile />} />
          <Route path={CHALLENGE_CREATE_PAGE} element={<ChallengeCreate />} />
          <Route
            path={CHALLENGE_CREATE_HOW_TO_PAGE}
            element={<ChallengeCreateHowTo />}
          />
        </>
      );
    }
  };

  const rootPageRender = () => {
    if (loggedIn) {
      return (
        <>
          <Route exact path="/" element={<Challenges />} />
          <Route element={<Challenges />} />
        </>
      );
    }
    return (
      <>
        <Route
          exact
          path="/"
          element={
            <LandingPage
              showNavOptions={props.showNavOptions}
              hideNavOptions={props.hideNavOptions}
            />
          }
        />
        <Route
          element={
            <LandingPage
              showNavOptions={props.showNavOptions}
              hideNavOptions={props.hideNavOptions}
            />
          }
        />
      </>
    );
  };

  return (
    <Routes>
      <Route path={LOGIN_PAGE} element={<LoginPage />} />
      <Route path={REGISTER_PAGE} element={<RegisterPage />} />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId`}
        element={<Challenge section={CHALLENGE_SECTIONS.LEADERBOARD} />}
      />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId/leaderboard`}
        element={<Challenge section={CHALLENGE_SECTIONS.LEADERBOARD} />}
      />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId/allsubmissions`}
        element={<Challenge section={CHALLENGE_SECTIONS.ALL_ENTRIES} />}
      />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId/readme`}
        element={<Challenge section={CHALLENGE_SECTIONS.README} />}
      />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId/howto`}
        element={<Challenge section={CHALLENGE_SECTIONS.HOW_TO} />}
      />
      <Route path={CHALLENGES_PAGE} element={<Challenges />} />
      <Route path={POLICY_PRIVACY_PAGE} element={<PolicyPrivacy />} />
      <Route
        path={`${POLICY_PRIVACY_PAGE}/login`}
        element={<PolicyPrivacy beforeLogin />}
      />
      <Route
        path={`${POLICY_PRIVACY_PAGE}/register`}
        element={<PolicyPrivacy beforeRegister />}
      />
        <Route
            path={`${EDIT_PROFILE_PAGE}`}
            element={<EditProfile />}
        />
      <Route path={'*'} element={<PageNotFound />} />
      {logInRoutesRender()}
      {rootPageRender()}
    </Routes>
  );
};

export default RoutingManager;
