import React from 'react';
// import { Container, FlexColumn, FlexRow, Svg } from '../../utils/containers';
// import { H1 } from '../../utils/fonts';
import { FlexColumn, FlexRow } from '../../utils/containers';
import { useParams } from 'react-router-dom';
import theme from '../../utils/theme';
import MobileChallengeMenu from './components/MobileChallengeMenu';
import Leaderboard from '../Leaderboard';
import Readme from '../Readme';
import HowToSubmission from '../HowToSubmission';
import MyEntries from '../MyEntries';
import Submit from '../Submit';
import Media from 'react-media';
import DesktopChallengeMenu from './components/DesktopChallengeMenu';
import {
  CHALLENGES_PAGE,
  CHALLENGE_SECTIONS,
  // RENDER_ICO,
} from '../../utils/globals';
// import textIco from '../../assets/text_ico.svg';
import getChallengeInfo from '../../api/getChallengeInfo';
import Loading from '../../components/generic/Loading';
import AllEntries from '../AllEntries/AllEntries';
import ChallengeSettings from '../../components/administration/ChallengeSettings';
import { useDispatch } from 'react-redux';
import { popUpMessageHandler } from '../../redux/popUpMessegeSlice';

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
            header: 'Challenge update error',
            message: `Error: ${challengeUpdateResult.detail}`,
            borderColor: theme.colors.red,
          })
        );
      } else {
        dispatch(
          popUpMessageHandler({
            header: 'Challenge update sucess',
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
      case CHALLENGE_SECTIONS.LEADERBOARD:
        return (
          <Leaderboard
            challengeName={challengeName}
            mainMetric={challenge.mainMetric}
          />
        );
      case CHALLENGE_SECTIONS.ALL_ENTRIES:
        return (
          <AllEntries
            challengeName={challengeName}
            mainMetric={challenge.mainMetric}
            setLoading={setLoading}
          />
        );
      case CHALLENGE_SECTIONS.README:
        return (
          <Readme
            challengeName={challengeName}
            metric={challenge.metric}
            description={challenge.description}
            readme={challenge.readme}
            deadline={challenge.deadline}
          />
        );
      case CHALLENGE_SECTIONS.HOW_TO:
        return (
          <HowToSubmission
            challengeName={challengeName}
            challengeSource={challenge.source}
          />
        );
      case CHALLENGE_SECTIONS.MY_ENTRIES:
        return <MyEntries challengeName={challengeName} mainMetric={challenge.mainMetric} />;
      case CHALLENGE_SECTIONS.SUBMIT:
        return <Submit challenge={challenge} setLoading={setLoading} />;
      case CHALLENGE_SECTIONS.SETTINGS:
        return (
          <FlexColumn padding="64px 0" width="50%">
            <ChallengeSettings
              challenge={challenge}
              setChallengeUpdateResult={setChallengeUpdateResult}
            />
          </FlexColumn>
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
        <FlexColumn
          minHeight="100vh"
          gap="12px"
          alignmentY="flex-start"
          padding="66px 0 0 0"
        >
          <Loading visible={loading} />
          {/*<H1 as="h1" margin="0 0 8px 0" textAlign="center">*/}
          {/*  {challenge.name}*/}
          {/*</H1>*/}
          <MobileChallengeMenu
            challengeName={challengeName}
            section={props.section}
          />
          {/*<Container*/}
          {/*  width="75%"*/}
          {/*  height="1px"*/}
          {/*  backgroundColor={theme.colors.dark}*/}
          {/*/>*/}
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
        <>
          <DesktopChallengeMenu
            challengeName={challengeName}
            section={props.section}
            challenge={challenge}
          />
          <FlexColumn
            minHeight="100vh"
            alignmentY="flex-start"
            padding="100px 24px 64px 280px"
            id="start"
          >
            <FlexRow gap="32px" margin="0 0 32px 0" padding="16px">
              {/*<FlexColumn alignmentX="flex-start" gap="24px" maxWidth="500px">*/}
              {/*  <H1 as="h1">{challenge.title}</H1>*/}
              {/*</FlexColumn>*/}
              {/*<Svg*/}
              {/*  src={challenge.type ? RENDER_ICO(challenge.type) : textIco}*/}
              {/*  width="120px"*/}
              {/*  height="120px"*/}
              {/*  size="contain"*/}
              {/*/>*/}
            </FlexRow>
            {/*<Container*/}
            {/*  width="55%"*/}
            {/*  height="1px"*/}
            {/*  backgroundColor={theme.colors.dark}*/}
            {/*/>*/}
            {sectionRender()}
          </FlexColumn>
        </>
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
