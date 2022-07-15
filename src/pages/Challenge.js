import React from "react";
import {Container, FlexColumn, FlexRow} from "../utils/containers";
import {useParams} from "react-router-dom";
import {H1} from "../utils/fonts";
import getChallenges from "../api/getChallenges";
import theme from "../utils/theme";
import MobileChallengeMenu from "../components/elements/MobileChallengeMenu";
import Leaderboard from "../components/sections/Leaderboard";
import Readme from "../components/sections/Readme";
import HowTo from "../components/sections/HowTo";
import MyEntries from "../components/sections/MyEntries";
import Submit from "../components/sections/Submit";

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

export default Challenge;