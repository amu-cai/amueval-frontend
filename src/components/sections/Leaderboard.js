import React from "react";
import {FlexColumn} from "../../utils/containers";
import {H2} from "../../utils/fonts";

const Leaderboard = () => {
    return (
        <FlexColumn padding='24px' as='section'>
            <H2 as='h2'>
                Leaderboard
            </H2>
        </FlexColumn>
    );
}

export default Leaderboard;