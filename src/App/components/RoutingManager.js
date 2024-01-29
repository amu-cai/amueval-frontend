import { Route, Routes } from 'react-router-dom';
import {
  CHALLENGES_PAGE,
  CHALLENGE_CREATE_PAGE,
  CHALLENGE_PAGE,
  CHALLENGE_SECTIONS,
  POLICY_PRIVACY_PAGE,
  PROFILE_PAGE,
} from '../../utils/globals';
import Challenge from '../../pages/Challenge';
import Challenges from '../../pages/Challanges';
import PolicyPrivacy from '../../pages/PolicyPrivacy';
import LandingPage from '../../pages/LandingPage';
import KeyCloakService from '../../services/KeyCloakService';
import Submission from '../../pages/Submission';
import Profile from '../../pages/Profile/Profile';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import ChallengeCreate from '../../pages/ChallengeCreate/ChallengeCreate';

const RoutingManager = (props) => {
  const loggedIn = KeyCloakService.isLoggedIn();

  const logInRoutesRender = () => {
    if (loggedIn) {
      return (
        <>
          <Route
            path={`/submission/:challengeId/:submissionId`}
            element={<Submission />}
          />
          <Route
            path={`${CHALLENGE_PAGE}/:challengeId/myentries`}
            element={
              <Challenge
                section={CHALLENGE_SECTIONS.MY_ENTRIES}
                popUpMessageHandler={props.popUpMessageHandler}
              />
            }
          />
          {/* <Route
            path={`${CHALLENGE_PAGE}/:challengeId/submit`}
            element={
              <Challenge
                section={CHALLENGE_SECTIONS.SUBMIT}
                popUpMessageHandler={props.popUpMessageHandler}
              />
            }
          /> */}
          <Route
            path={PROFILE_PAGE}
            element={
              <Profile popUpMessageHandler={props.popUpMessageHandler} />
            }
          />
        </>
      );
    }
  };

  const rootPageRender = () => {
    if (loggedIn) {
      return (
        <>
          <Route
            exact
            path="/"
            element={
              <Challenges popUpMessageHandler={props.popUpMessageHandler} />
            }
          />
          <Route
            element={
              <Challenges popUpMessageHandler={props.popUpMessageHandler} />
            }
          />
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
              popUpMessageHandler={props.popUpMessageHandler}
              showNavOptions={props.showNavOptions}
              hideNavOptions={props.hideNavOptions}
            />
          }
        />
        <Route
          element={
            <LandingPage
              popUpMessageHandler={props.popUpMessageHandler}
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
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId`}
        element={
          <Challenge
            section={CHALLENGE_SECTIONS.LEADERBOARD}
            popUpMessageHandler={props.popUpMessageHandler}
          />
        }
      />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId/leaderboard`}
        element={
          <Challenge
            section={CHALLENGE_SECTIONS.LEADERBOARD}
            popUpMessageHandler={props.popUpMessageHandler}
          />
        }
      />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId/allsubmissions`}
        element={
          <Challenge
            section={CHALLENGE_SECTIONS.ALL_ENTRIES}
            popUpMessageHandler={props.popUpMessageHandler}
          />
        }
      />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId/submit`}
        element={
          <Challenge
            section={CHALLENGE_SECTIONS.SUBMIT}
            popUpMessageHandler={props.popUpMessageHandler}
          />
        }
      />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId/readme`}
        element={<Challenge section={CHALLENGE_SECTIONS.README} />}
      />
      <Route
        path={`${CHALLENGE_PAGE}/:challengeId/howto`}
        element={
          <Challenge
            popUpMessageHandler={props.popUpMessageHandler}
            section={CHALLENGE_SECTIONS.HOW_TO}
          />
        }
      />
      <Route
        path={CHALLENGES_PAGE}
        element={<Challenges popUpMessageHandler={props.popUpMessageHandler} />}
      />
      <Route
        path={POLICY_PRIVACY_PAGE}
        element={
          <PolicyPrivacy popUpMessageHandler={props.popUpMessageHandler} />
        }
      />
      <Route
        path={`${POLICY_PRIVACY_PAGE}/login`}
        element={
          <PolicyPrivacy
            popUpMessageHandler={props.popUpMessageHandler}
            beforeLogin
          />
        }
      />
      <Route
        path={`${POLICY_PRIVACY_PAGE}/register`}
        element={
          <PolicyPrivacy
            popUpMessageHandler={props.popUpMessageHandler}
            beforeRegister
          />
        }
      />
      <Route
        path={CHALLENGE_CREATE_PAGE}
        element={
          <ChallengeCreate popUpMessageHandler={props.popUpMessageHandler} />
        }
      />
      <Route path={'*'} element={<PageNotFound />} />
      {logInRoutesRender()}
      {rootPageRender()}
    </Routes>
  );
};

export default RoutingManager;
