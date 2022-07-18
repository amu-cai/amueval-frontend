import React from "react";
import {Grid} from "../../utils/containers";
import getChallengeSubmissions from "../../api/getChallengeSubmissions";
import {Body, Medium} from "../../utils/fonts";

const Table = (props) => {
    const headerElements = ['#', 'submitter', 'when', 'entries', 'result'];
    const [challengeData, setChallengeData] = React.useState({});

    React.useEffect(() => {
        challengeDataRequest();
    });

    const challengeDataRequest = () => {
        getChallengeSubmissions(setChallengeData, props.challengeName);
    }

    const renderSubmissions = () => {
        const submissions = challengeData.submissions;
        if (submissions) {
            return (
                submissions.map((submission, index) => {
                    return (
                        <React.Fragment key={`leaderboard-row-${index}`}>
                            <Body>
                                {index}
                            </Body>
                            <Body>
                                {submission.submitter}
                            </Body>
                            <Body>
                                {submission.when.slice(11, 16)} {submission.when.slice(0, 10)}
                            </Body>
                            <Body>
                                {submission.version.length}
                            </Body>
                            <Body>
                                {submission.evaluations[0].score}
                            </Body>
                        </React.Fragment>
                    );
                })
            );
        }
    }

    return (
        <>
            <Grid gridTemplateColumns='1fr 3fr 3fr 1fr 1fr' gridGap='10px'>
                {headerElements.map((elem, index) => {
                    return (
                        <Medium key={`leaderboard-header-${index}`}>
                            {elem}
                        </Medium>
                    )
                })}
                {renderSubmissions()}
            </Grid>
        </>
    );
}

export default Table;