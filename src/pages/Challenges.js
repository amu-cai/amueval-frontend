import React from "react";
import {H1} from "../utils/fonts";
import {FlexColumn} from "../utils/containers";
import Search from "../components/elements/Search";

const Challenges = () => {
    return (
        <FlexColumn as='main' alignmentY='flex-start' width='100%'
                    minHeight='100vh' padding='90px 0 32px 0'>
            <FlexColumn maxWidth='452px' alignmentX='flex-start' width='80%'>
                <H1 as='h1' margin='0 0 20px 0'>
                    Challenges
                </H1>
                <Search/>
            </FlexColumn>
        </FlexColumn>
    );
}

export default Challenges;