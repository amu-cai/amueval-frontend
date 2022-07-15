import React from "react";
import {Container, FlexColumn, FlexRow, Svg} from "../utils/containers";
import {useParams} from "react-router-dom";
import {H1, Medium} from "../utils/fonts";
import getChallenges from "../api/getChallenges";
import theme from "../utils/theme";
import MobileChallengeMenu from "../components/elements/MobileChallengeMenu";
import Leaderboard from "../components/sections/Leaderboard";
import Readme from "../components/sections/Readme";
import HowTo from "../components/sections/HowTo";
import MyEntries from "../components/sections/MyEntries";
import Submit from "../components/sections/Submit";
import Media from "react-media";
import DesktopChallengeMenu from "../components/elements/DesktopChallengeMenu";
import {MINI_DESCRIPTION_RENDER, RENDER_ICO} from "../utils/globals";
import textIco from "../assets/text_ico.svg";

const Challenge = () => {
    const challengeName = useParams().challengeId;
    const [challenges, setChallenges] = React.useState([]);
    const [section, setSection] = React.useState([0]);

    React.useEffect(() => {
        getChallenges(setChallenges);
    }, []);

    const getChallenge = () => {
        if (challenges.length !== 0) {
            for (let challenge of challenges) {
                if (challenge.name === challengeName)
                    return challenge
            }
        }
        return '';
    }

    const sectionRender = () => {
        switch (section) {
            case 0:
                return <Leaderboard/>
            case 1:
                return <Readme/>
            case 2:
                return <HowTo/>
            case 3:
                return <MyEntries/>
            case 4:
                return <Submit/>
            default:
                return <Leaderboard/>
        }
    }

    const mobileRender = () => {
        return (
            <FlexColumn minHeight='100vh' gap='12px' alignmentY='flex-start' padding='66px 0 0 0'>
                <H1 margin='0 0 8px 0'>
                    {getChallenge().title}
                </H1>
                <MobileChallengeMenu setSection={setSection}/>
                <Container width='75%' height='1px' backgroundColor={theme.colors.dark}/>
                {sectionRender()}
            </FlexColumn>
        );
    }

    const desktopRender = () => {
        return (
            <>
                <DesktopChallengeMenu setSection={setSection}/>
                <FlexColumn minHeight='100vh' alignmentY='flex-start' padding='64px 0 64px 310px'>
                    <FlexRow gap='32px' margin='0 0 32px 0' padding='16px'>
                        <FlexColumn alignmentX='flex-start' gap='24px' maxWidth='500px'>
                            <H1 as='h1'>
                                {getChallenge().title}
                            </H1>
                            <Medium as='p'>
                                {MINI_DESCRIPTION_RENDER(getChallenge().description)}
                            </Medium>
                        </FlexColumn>
                        <Svg src={getChallenge().type ? RENDER_ICO(getChallenge().type) : textIco}
                             width='120px' height='120px' size='contain'/>
                    </FlexRow>
                    <Container width='55%' height='1px' backgroundColor={theme.colors.dark}/>
                    {sectionRender()}
                </FlexColumn>
            </>
        );
    }

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
}

export default Challenge;