import React from "react";
import {FlexColumn} from "../utils/containers";
import {useParams} from "react-router-dom";
import {H1} from "../utils/fonts";

const Challenge = () => {
    const challengeId = useParams().challengeId;
    return (
        <FlexColumn minHeight='100vh'>
            <H1>
                {challengeId}
            </H1>
        </FlexColumn>
    );
}

export default Challenge;