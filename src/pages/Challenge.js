import React from "react";
import {Container, FlexColumn, FlexRow} from "../utils/containers";
import {Link, useParams} from "react-router-dom";
import {H1, Medium} from "../utils/fonts";
import getChallenges from "../api/getChallenges";
import theme from "../utils/theme";
import styled from "styled-components";

const ChallengeLink = styled(Medium)`
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({theme}) => theme.colors.green};
  }
`;


const Challenge = () => {
    const challengeName = useParams().challengeId;
    const [challenges, setChallenges] = React.useState([]);

    const getChallenge = () => {
        if (challenges.length !== 0) {
            for (let challenge of challenges) {
                if (challenge.name === challengeName)
                    return challenge
            }
        }
        return '';
    }

    React.useEffect(() => {
        getChallenges(setChallenges);
    }, []);

    return (
        <FlexColumn minHeight='100vh' gap='12px' alignmentY='flex-start' padding='66px 0 0 0'>
            <H1 margin='0 0 8px 0'>
                {getChallenge().title}
            </H1>
            <FlexRow gap='32px'>
                <ChallengeLink as={Link} to='/'>
                    Leaderboard
                </ChallengeLink>
                <ChallengeLink as={Link} to='/'>
                    Readme
                </ChallengeLink>
                <ChallengeLink as={Link} to='/'>
                    How to
                </ChallengeLink>
            </FlexRow>
            <FlexRow gap='32px'>
                <ChallengeLink as={Link} to='/'>
                    Submit
                </ChallengeLink>
                <ChallengeLink as={Link} to='/'>
                    My entries
                </ChallengeLink>
            </FlexRow>
            <Container width='75%' height='1px' backgroundColor={theme.colors.dark}/>
        </FlexColumn>
    );
}

export default Challenge;