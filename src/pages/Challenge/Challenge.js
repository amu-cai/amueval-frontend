import React from 'react';
import { FlexColumn, FlexRow } from '../../utils/containers';
import { useParams } from 'react-router-dom';
import theme from '../../utils/theme';
import Leaderboard from '../Leaderboard';
import HowToSubmission from '../HowToSubmission';
import Submit from '../Submit';
import Media from 'react-media';
import DesktopChallengeMenu from './components/DesktopChallengeMenu';
import {
  CHALLENGES_PAGE,
  CHALLENGE_SECTIONS, getChallengeImage,
} from '../../utils/globals';
import getChallengeInfo from '../../api/getChallengeInfo';
import Loading from '../../components/generic/Loading';
import AllSubmissions from '../AllSubmissions/AllSubmissions';
import ChallengeEdit from "../ChallengeEdit/ChallengeEdit";
import { useDispatch } from 'react-redux';
import { popUpMessageHandler } from '../../redux/popUpMessegeSlice';
import ChallengeStyle from "./ChallengeStyle";
import {H1New} from "../../utils/fonts";
import Overview from "../Overview";

const Challenge = (props) => {
  const dispatch = useDispatch();
  const challengeName = useParams().challengeId;
  const [challenge, setChallenge] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [challengeUpdateResult, setChallengeUpdateResult] =
    React.useState(null);

  React.useEffect(() => {
    getChallengeInfo(setChallenge, setLoading, challengeName);
  }, [challengeName]);

  React.useEffect(() => {
    if (challengeUpdateResult) {
      if (challengeUpdateResult?.detail) {
        dispatch(
          popUpMessageHandler({
            header: 'Overview update error',
            message: `Error: ${challengeUpdateResult.detail}`,
            borderColor: theme.colors.red,
          })
        );
      } else {
        dispatch(
          popUpMessageHandler({
            header: 'Overview update sucess',
            message: `${challengeUpdateResult.challenge}: ${challengeUpdateResult.message}`,
            borderColor: theme.colors.green,
            confirmHandler: () => window.location.replace(CHALLENGES_PAGE),
          })
        );
      }
    }
  }, [challengeUpdateResult, dispatch]);

  const sectionRender = () => {
    switch (props.section) {
      case CHALLENGE_SECTIONS.OVERVIEW:
        return (
            <Overview
                challenge={challenge}
            />
        );
      case CHALLENGE_SECTIONS.LEADERBOARD:
        return (
          <Leaderboard
            challengeName={challengeName}
            mainMetric={challenge.mainMetric}
          />
        );
      case CHALLENGE_SECTIONS.SUBMISSIONS:
        return (
          <AllSubmissions
            challengeName={challengeName}
            mainMetric={challenge.mainMetric}
            setLoading={setLoading}
          />
        );
      case CHALLENGE_SECTIONS.HOW_TO:
        return (
          <HowToSubmission
            challengeName={challengeName}
            challengeSource={challenge.source}
          />
        );
      case CHALLENGE_SECTIONS.ADD_SOLUTION:
        return <Submit challenge={challenge} setLoading={setLoading} />;
      case CHALLENGE_SECTIONS.EDIT:
        return (
            <ChallengeEdit
              challenge={challenge}
              setChallengeUpdateResult={setChallengeUpdateResult}
            />
        );
      default:
        return (
          <Leaderboard
            challengeName={challengeName}
            mainMetric={challenge.mainMetric}
          />
        );
    }
  };

  const mobileRender = () => {
    if (!loading) {
      return (
        <FlexColumn>
          {sectionRender()}
        </FlexColumn>
      );
    } else {
      return <Loading />;
    }
  };

  const desktopRender = () => {
    if (!loading) {
      return (
          <ChallengeStyle>
            <FlexRow className="challengeName" width="100%" alignmentX="start" alignmentY="start">
              <img className="challengeImg" src={getChallengeImage(challenge.type)} alt="Overview type"/>
              <H1New textLeft={true} className="challengeTitle">
                {challenge.title}
              </H1New>
            </FlexRow>
            <DesktopChallengeMenu
                challengeName={challengeName}
                section={props.section}
                challenge={challenge}
            />
            <div className="spacer"></div>
              {sectionRender()}
          </ChallengeStyle>
      );
    } else {
      return <Loading />;
    }
  };

  return (
    <>
      <Media query={theme.mobile}>{mobileRender()}</Media>
      <Media query={theme.desktop}>{desktopRender()}</Media>
    </>
  );
};

export default Challenge;
