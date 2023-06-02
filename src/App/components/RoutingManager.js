import { Route, Routes } from 'react-router-dom';
import {
  CHALLENGES_PAGE,
  CHALLENGE_PAGE,
  CHALLENGE_SECTIONS,
  POLICY_PRIVACY_PAGE,
} from '../../utils/globals';
import Challenge from '../../pages/Challenge';
import Challenges from '../../pages/Challanges';
import PolicyPrivacy from '../../pages/PolicyPrivacy';
import LandingPage from '../../pages/LandingPage';
import KeyCloakService from '../../services/KeyCloakService';

const RoutingManager = (props) => {
  return (
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
            popUpMessageHandler={props.popUpMessageHandler}
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
      )}
    </Routes>
  );
};

export default RoutingManager;
