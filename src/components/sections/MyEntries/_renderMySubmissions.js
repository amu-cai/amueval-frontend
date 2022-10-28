import {ELEMENTS_PER_PAGE, IS_MOBILE} from '../../../utils/globals';
import {FlexColumn, FlexRow, Grid, Svg} from '../../../utils/containers';
import {Body, Medium} from '../../../utils/fonts';
import styled from 'styled-components';
import React from 'react';
import theme from '../../../utils/theme';
import arrow from '../../../assets/arrow.svg';

const Line = styled(FlexRow)`
  position: absolute;
  top: ${({top}) => top ? top : 'auto'};
  bottom: ${({bottom}) => bottom ? bottom : 'auto'};
  left: 0;
  width: 100%;
  background-color: ${({theme}) => theme.colors.dark04};
  height: ${({height}) => height ? height : '1px'};
`;

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
                              backgroundColor={index % 2 === 1 ? theme.colors.dark01 : 'transparent'}
                              gridTemplateColumns={!IS_MOBILE() ? '1fr ' + '4fr '.repeat(headerElements.length - 1) : '1fr 3fr 1fr 1fr 2fr'}
                              gridGap='20px' position='relative' width='100%' padding='4px'>
                            {index === 0 ? headerElements.map((elem, i) => {
                                return (
                                    <FlexRow alignmentX='flex-start'>
                                        <Medium key={`leaderboard-header-${i}`} fontSize='16px' as='td'
                                                textAlign={elem === 'when' ? 'right' : 'left'}
                                                width={elem === 'when' ? '100%' : 'auto'} padding='0 6px 0 0'>
                                            {elem}
                                        </Medium>
                                        {elem !== '#' ?
                                            <>
                                                <Svg width='8px' rotate='180deg' src={arrow}
                                                     backgroundColor={theme.colors.dark} margin='2px 0 0 0'/>
                                                <Svg width='8px' src={arrow} backgroundColor={theme.colors.dark}
                                                     margin='0 0 2px 0'/>
                                            </> : ''}
                                    </FlexRow>
                                );
                            }) : ''}
                            {index === 0 ? <Line height='2px' top='50%'/> : ''}
                            <Body as='td'>
                                {index + n + 1}
                            </Body>
                            {myEntries.tests.map((test, i) => {
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