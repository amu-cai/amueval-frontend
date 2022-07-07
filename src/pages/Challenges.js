import React from "react";
import {H1} from "../utils/fonts";
import {FlexColumn} from "../utils/containers";

const Challenges = () => {
    return (
        <FlexColumn as='main' alignmentY='flex-start' width='100%'
                    minHeight='100vh' padding='90px 0 32px 0'>
            <FlexColumn maxWidth='452px' alignmentX='flex-start' width='80%'>
                <H1 as='h1'>
                    Challenges
                </H1>
            </FlexColumn>
        </FlexColumn>
    );
}

export default Challenges;