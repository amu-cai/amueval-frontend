import {ELEMENTS_PER_PAGE} from '../../../utils/globals';
import {FlexColumn, FlexRow, Grid} from '../../../utils/containers';
import {Body} from '../../../utils/fonts';
import styled from 'styled-components';

const Line = styled(FlexRow)`
  position: absolute;
  top: -6px;
  left: 0;
  width: 100%;
  background-color: ${({theme}) => theme.colors.dark04};
  height: 1px;
`;

const _renderSubmissions = (pageNr, submissions, gridGap, metricChoose) => {
    const n = (pageNr - 1) * ELEMENTS_PER_PAGE;
    if (submissions) {
        return (
            <FlexColumn as='tbody' width='100%'>
                {submissions.slice(n, n + ELEMENTS_PER_PAGE).sort((a, b) => b.evaluations[metricChoose].score - a.evaluations[metricChoose].score).map(({
                                                                                                                                                            submitter,
                                                                                                                                                            when,
                                                                                                                                                            evaluations,
                                                                                                                                                            times
                                                                                                                                                        }, index) => {
                    return (
                        <Grid as='tr' key={`leaderboard-row-${index}`} gridTemplateColumns='1fr 3fr 1fr 1fr 2fr'
                              gridGap={gridGap} margin='10px 0 0 0' position='relative' width='100%' padding='4px'>
                            <Body as='td'>
                                {index + n + 1}
                            </Body>
                            <Body as='td'>
                                {submitter ? submitter : '[anonymous]'}
                            </Body>
                            <Body as='td' textAlign='right'>
                                {evaluations[metricChoose] ? evaluations[metricChoose].score : 'xxx'}
                            </Body>
                            <Body as='td' padding='0 2px 0 0' textAlign='right'>
                                {times ? times : 1}
                            </Body>
                            <Body as='td' textAlign='right'>
                                {when ? `${when.slice(11, 16)} ${when.slice(0, 10)}`
                                    : 'xxx'}
                            </Body>
                            <Line as='td'/>
                        </Grid>
                    );
                })}
            </FlexColumn>
        );
    }
};

export default _renderSubmissions;