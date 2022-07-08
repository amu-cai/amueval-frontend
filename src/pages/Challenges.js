import React from "react";
import {H1} from "../utils/fonts";
import {FlexColumn, Grid} from "../utils/containers";
import Search from "../components/elements/Search";
import MiniChallenge from "../components/elements/MiniChallenge";
import Pager from "../components/elements/Pager";

const Challenges = () => {
    return (
        <FlexColumn as='main' alignmentY='flex-start' width='100%'
                    minHeight='100vh' padding='90px 0 32px 0'>
            <FlexColumn alignmentX='flex-start' width='80%'>
                <H1 as='h1' margin='0 0 20px 0'>
                    Challenges
                </H1>
                <Search/>
                <FlexColumn width='100%'>
                    <Grid margin='32px 0' gridGap='32px 0'>
                        <MiniChallenge title='Challenging America geo prediction' type={'text'}
                                       describe={`Guess publication location for a piece of text.`}/>
                        <MiniChallenge title='Challenging America geo prediction' type={'image'}
                                       describe={`Guess publication location for a piece of text.`}/>
                        <MiniChallenge title='Challenging America geo prediction' type={'tabular'}
                                       describe={`Guess publication location for a piece of text.`}/>
                    </Grid>
                </FlexColumn>
            </FlexColumn>
            <Pager pages={5}/>
        </FlexColumn>
    );
}

export default Challenges;