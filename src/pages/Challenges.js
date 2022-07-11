import React from "react";
import {H1} from "../utils/fonts";
import {FlexColumn, Grid} from "../utils/containers";
import Search from "../components/elements/Search";
import MiniChallenge from "../components/elements/MiniChallenge";
import Pager from "../components/elements/Pager";
import challengesResp from "../prototypeData/challenges";
import {ELEMENTS_PER_PAGE} from "../utils/globals";

const Challenges = () => {
    const [pageNr, setPageNr] = React.useState(1);
    const [challenges, setChallenges] = React.useState(challengesResp);

    const calcPages = () => {
        return Math.ceil(challenges.length / ELEMENTS_PER_PAGE);
    }

    const searchQueryHandler = (event) => {
        let searchQuery = event.target.value;
        let challengesToRender = [];
        setPageNr(1);
        if (searchQuery === '')
            setChallenges(challengesResp)
        else {
            for (let challenge of challengesResp) {
                let str = `${challenge.title} ${challenge.describe} ${challenge.type} ${challenge.metric} 
                ${challenge.bestScore} ${challenge.timeLeft} ${challenge.baseline} ${challenge.prize}`;
                if (str.toLowerCase().includes(searchQuery.toLowerCase()))
                    challengesToRender.push(challenge);
            }
            setChallenges(challengesToRender);
        }
    }

    const nextPage = () => {
        if (pageNr !== calcPages(challenges)) {
            let newPage = pageNr + 1;
            setPageNr(newPage);
        }
    }

    const previousPage = () => {
        if (pageNr !== 1) {
            let newPage = pageNr - 1;
            setPageNr(newPage);
        }
    }

    const renderChallenges = () => {
        const n = (pageNr - 1) * ELEMENTS_PER_PAGE;
        return (
            challenges.slice(n, n + ELEMENTS_PER_PAGE).map((challenge, index) => {
                return (
                    <MiniChallenge key={index} title={challenge.title} type={challenge.type}
                                   describe={challenge.describe} metric={challenge.metric}
                                   bestScore={challenge.bestScore} baseline={challenge.baseline}
                                   prize={challenge.prize} timeLeft={challenge.timeLeft}/>
                );
            })
        )
    }

    return (
        <FlexColumn as='main' alignmentY='flex-start' width='100%'
                    minHeight='100vh' padding='90px 0 32px 0'>
            <FlexColumn alignmentX='flex-start' width='80%'>
                <H1 as='h1' margin='0 0 20px 0'>
                    Challenges
                </H1>
                <Search searchQueryHandler={searchQueryHandler}/>
                <FlexColumn width='100%'>
                    <Grid margin='32px 0' gridGap='32px 0'>
                        {renderChallenges()}
                    </Grid>
                </FlexColumn>
            </FlexColumn>
            <Pager pageNr={pageNr} pages={calcPages()}
                   nextPage={nextPage} previousPage={previousPage}/>
        </FlexColumn>
    );
}

export default Challenges;