import React from "react";
import {H1} from "../utils/fonts";
import {FlexColumn, Grid} from "../utils/containers";
import Search from "../components/elements/Search";
import MiniChallenge from "../components/elements/MiniChallenge";
import textIco from '../assets/text_ico.svg';
import tabularIco from '../assets/tabular_ico.svg';
import imageIco from '../assets/image_ico.svg';
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
                <Grid margin='32px 0' gridGap='32px 0'>
                    <MiniChallenge title='Challenging America geo prediction' ico={textIco}
                                   describe={`Guess publication location for a piece of text.`}/>
                    <MiniChallenge title='Challenging America geo prediction' ico={tabularIco}
                                   describe={`Guess publication location for a piece of text.`}/>
                    <MiniChallenge title='Challenging America geo prediction' ico={imageIco}
                                   describe={`Guess publication location for a piece of text.`}/>
                </Grid>
            </FlexColumn>
            <Pager number={1}/>
        </FlexColumn>
    );
}

export default Challenges;