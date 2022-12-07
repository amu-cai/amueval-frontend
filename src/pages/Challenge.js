import React from 'react';
import {Container, FlexColumn, FlexRow, Svg} from '../utils/containers';
import {useParams} from 'react-router-dom';
import {H1, H2, Medium} from '../utils/fonts';
import theme from '../utils/theme';
import MobileChallengeMenu from '../components/specific_challenge/MobileChallengeMenu';
import Leaderboard from '../components/specific_challenge/Leaderboard/Leaderboard';
import Readme from '../components/specific_challenge/Readme';
import HowTo from '../components/specific_challenge/HowTo/HowTo';
import MyEntries from '../components/specific_challenge/MyEntries/MyEntries';
import Submit from '../components/specific_challenge/Submit';
import Media from 'react-media';
import DesktopChallengeMenu from '../components/specific_challenge/DesktopChallengeMenu';
import {RENDER_ICO} from '../utils/globals';
import textIco from '../assets/text_ico.svg';
import getChallengeInfo from '../api/getChallengeInfo';
import Loading from '../components/generic/Loading';
import getUser from '../api/getUser';

const Challenge = (props) => {
    const challengeName = useParams().challengeId;
    const [challenge, setChallenge] = React.useState([]);
    const [section, setSection] = React.useState(0);
    const [loading, setLoading] = React.useState(true);
    const [user, setUser] = React.useState('');

    React.useEffect(() => {
        getChallengeInfo(setChallenge, setLoading, challengeName);
        getUser(setUser);
    }, [challengeName]);

    const sectionRender = () => {
        switch (section) {
            case 0:
                return <Leaderboard challengeName={challengeName} mainMetric={challenge.mainMetric} user={user}/>;
            case 1:
                return <Readme challengeName={challengeName} metric={challenge.mainMetric}
                               description={challenge.description} deadline={challenge.deadline}/>;
            case 2:
                return <HowTo challengeName={challengeName} user={user}/>;
            case 3:
                return <MyEntries challengeName={challengeName}/>;
            case 4:
                return <Submit popUpMessageHandler={props.popUpMessageHandler} challengeName={challengeName} setLoading={setLoading}/>;
            default:
                return <Leaderboard challengeName={challengeName} mainMetric={challenge.mainMetric}/>;
        }
    };

    const mobileRender = () => {
        return (
            <FlexColumn minHeight='100vh' gap='12px' alignmentY='flex-start' padding='66px 0 0 0'>
                <Loading visible={loading}/>
                <H1 as='h1' margin='0 0 8px 0' textAlign='center'>
                    {challenge.title}
                </H1>
                <MobileChallengeMenu setSection={setSection} section={section}/>
                <Container width='75%' height='1px' backgroundColor={theme.colors.dark}/>
                {sectionRender()}
            </FlexColumn>
        );
    };

    const desktopRender = () => {
        if (!loading) {
            return (
                <>
                    <DesktopChallengeMenu setSection={setSection} section={section}/>
                    <FlexColumn minHeight='100vh' alignmentY='flex-start' padding='64px 24px 64px 310px' id='start'>
                        <FlexRow gap='32px' margin='0 0 32px 0' padding='16px'>
                            <FlexColumn alignmentX='flex-start' gap='24px' maxWidth='500px'>
                                <H1 as='h1'>
                                    {challenge.title}
                                </H1>
                                <Medium as='p'>
                                    {challenge.description}
                                </Medium>
                            </FlexColumn>
                            <Svg src={challenge.type ? RENDER_ICO(challenge.type) : textIco}
                                 width='120px' height='120px' size='contain'/>
                        </FlexRow>
                        <Container width='55%' height='1px' backgroundColor={theme.colors.dark}/>
                        {sectionRender()}
                    </FlexColumn>
                </>
            );
        }
        else {
            return (
                <FlexColumn position='fixed' top='0' left='0' width='100%' height='100vh' zIndex='10'>
                    <H2 as='h1'>
                        Submission processing...
                    </H2>
                    <Loading />
                </FlexColumn>
            );
        }
    };

    return (
        <>
            <Media query={theme.mobile}>
                {mobileRender()}
            </Media>
            <Media query={theme.desktop}>
                {desktopRender()}
            </Media>
        </>
    );
};

export default Challenge;