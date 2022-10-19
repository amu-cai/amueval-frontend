import {ELEMENTS_PER_PAGE, IS_MOBILE} from '../../../utils/globals';
import {FlexColumn, FlexRow, Grid} from '../../../utils/containers';
import {Body, Medium} from '../../../utils/fonts';
import styled from 'styled-components';
import React from 'react';

const Line = styled(FlexRow)`
  position: absolute;
  top: -6px;
  left: 0;
  width: 100%;
  background-color: ${({theme}) => theme.colors.dark04};
  height: 1px;
`;


// const sortBySwitch = (submissions, metricChoose, sortBy) => {
//     switch (sortBy) {
//         case 0:
//             return submissions.sort((a, b) => (a.submitter < b.submitter) ? 1 : ((b.submitter < a.submitter) ? -1 : 0));
//         case 1:
//             return submissions.sort((a, b) => a.evaluations[metricChoose].score - b.evaluations[metricChoose].score);
//         case 2:
//             return submissions.sort((a, b) => a.times - b.times);
//         case 3:
//             console.log(submissions[0].when);
//             return submissions.sort((a, b) => (a.when > b.when) ? 1 : ((b.when > a.when) ? -1 : 0));
//         case 4:
//             return submissions.sort((a, b) => (a.submitter > b.submitter) ? 1 : ((b.submitter > a.submitter) ? -1 : 0));
//         case 5:
//             return submissions.sort((a, b) => b.evaluations[metricChoose].score - a.evaluations[metricChoose].score);
//         case 6:
//             return submissions.sort((a, b) => b.times - a.times);
//         case 7:
//             console.log(submissions[0].when);
//             return submissions.sort((a, b) => (a.when < b.when) ? 1 : ((b.when < a.when) ? -1 : 0));
//         default:
//             return submissions.sort((a, b) => b.evaluations[metricChoose].score - a.evaluations[metricChoose].score);
//     }
// };

const renderEvalResult = (evaluations, test) => {
    for (let myEval of evaluations) {
        if (myEval.test.name === test.name && myEval.test.metric === test.metric) {
            return myEval.score.slice(0, 7);
        }
    }
    return 'xxx';
};

const _renderMySubmissions = (pageNr, myEntries, gridGap, metricChoose, sortBy, headerElements) => {
    const n = (pageNr - 1) * ELEMENTS_PER_PAGE;

    if (myEntries) {
        // submissions = sortBySwitch(submissions, metricChoose, sortBy);
        let submissions = myEntries.submissions.slice(n, n + ELEMENTS_PER_PAGE);
        return (
            <FlexColumn as='tbody' width='100%'>
                {submissions.map(({
                                      submitter,
                                      when,
                                      evaluations,
                                      times,
                                      description
                                  }, index) => {
                    return (
                        <Grid as='tr' key={`leaderboard-row-${index}`}
                              gridTemplateColumns={!IS_MOBILE() ? '1fr ' + '4fr '.repeat(headerElements.length - 2) + '2fr' : '1fr 3fr 1fr 1fr 2fr'}
                              gridGap={gridGap} margin='10px 0 0 0' position='relative' width='100%' padding='4px'>
                            {index === 0 ? headerElements.map((elem, i) => {
                                return (
                                    <Medium key={`leaderboard-header-${i}`}
                                            textAlign={elem === 'entries' || elem === 'when' ? 'right' : 'left'}
                                            minWidth={elem === 'result' ? '72px' : 'none'}
                                            fontSize='18px'
                                            as='td'>{elem}</Medium>
                                );
                            }) : ''}
                            <Body as='td'>
                                {index + n + 1}
                            </Body>
                            {myEntries.tests.map((test, i) => {
                                console.log(description);
                                return (
                                    <Body key={`eval-result-${i}`} width='80px' as='td' textAlign='left'
                                          minWidth='72px'>
                                        {renderEvalResult(evaluations, test)}
                                    </Body>
                                );
                            })}
                            <Body as='td' textAlign='right'>
                                {when ? `${when.slice(11, 16)} ${when.slice(0, 10)}`
                                    : 'xxx'}
                            </Body>
                            {index !== 0 ? <Line as='td'/> : ''}
                        </Grid>
                    );
                })}
            </FlexColumn>
        );
    }
};

export default _renderMySubmissions;