import React from 'react';
import { Container, FlexColumn, FlexRow, Svg } from '../../utils/containers';
import { useParams } from 'react-router-dom';
import { H1, Medium } from '../../utils/fonts';
import theme from '../../utils/theme';
import MobileChallengeMenu from './components/MobileChallengeMenu';
import Leaderboard from '../Leaderboard';
import Readme from '../Readme';
import HowTo from '../HowTo';
import MyEntries from '../MyEntries';
import Submit from '../Submit';
import Media from 'react-media';
import DesktopChallengeMenu from './components/DesktopChallengeMenu';
import { CHALLENGE_SECTIONS, RENDER_ICO } from '../../utils/globals';
import textIco from '../../assets/text_ico.svg';
import getChallengeInfo from '../../api/getChallengeInfo';
import Loading from '../../components/generic/Loading';
import AllEntries from '../AllEntries/AllEntries';

const Challenge = (props) => {
  const challengeName = useParams().challengeId;
  const [challenge, setChallenge] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getChallengeInfo(setChallenge, setLoading, challengeName);
  }, [challengeName]);

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
        return <HowTo challengeName={challengeName} />;
      case CHALLENGE_SECTIONS.MY_ENTRIES:
        return <MyEntries challengeName={challengeName} />;
      case CHALLENGE_SECTIONS.SUBMIT:
        return <Submit challengeName={challengeName} setLoading={setLoading} />;
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
          <H1 as="h1" margin="0 0 8px 0" textAlign="center">
            {challenge.name}
          </H1>
          <MobileChallengeMenu
            challengeName={challengeName}
            section={props.section}
          />
          <Container
            width="75%"
            height="1px"
            backgroundColor={theme.colors.dark}
          />
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
          />
          <FlexColumn
            minHeight="100vh"
            alignmentY="flex-start"
            padding="64px 24px 64px 280px"
            id="start"
          >
            <FlexRow gap="32px" margin="0 0 32px 0" padding="16px">
              <FlexColumn alignmentX="flex-start" gap="24px" maxWidth="500px">
                <H1 as="h1">{challenge.title}</H1>
                <Medium as="p">{challenge.description}</Medium>
              </FlexColumn>
              <Svg
                src={challenge.type ? RENDER_ICO(challenge.type) : textIco}
                width="120px"
                height="120px"
                size="contain"
              />
            </FlexRow>
            <Container
              width="55%"
              height="1px"
              backgroundColor={theme.colors.dark}
            />
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
