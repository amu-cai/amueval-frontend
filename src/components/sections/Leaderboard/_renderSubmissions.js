import {ELEMENTS_PER_PAGE, IS_MOBILE} from '../../../utils/globals';
import {FlexColumn, FlexRow, Grid, Svg} from '../../../utils/containers';
import {Body, Medium} from '../../../utils/fonts';
import styled from 'styled-components';
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

const sortBySwitch = (submissions, metricChoose, sortBy) => {
    switch (sortBy) {
        case 0:
            return submissions.sort((a, b) => (a.submitter < b.submitter) ? 1 : ((b.submitter < a.submitter) ? -1 : 0));
        case 1:
            if (metricChoose)
                return submissions.sort((a, b) => a.evaluations[metricChoose].score - b.evaluations[metricChoose].score);
            return submissions;
        case 2:
            return submissions.sort((a, b) => a.times - b.times);
        case 3:
            return submissions.sort((a, b) => (a.when > b.when) ? 1 : ((b.when > a.when) ? -1 : 0));
        case 4:
            return submissions.sort((a, b) => (a.submitter > b.submitter) ? 1 : ((b.submitter > a.submitter) ? -1 : 0));
        case 5:
            if (metricChoose)
                return submissions.sort((a, b) => b.evaluations[metricChoose].score - a.evaluations[metricChoose].score);
            return submissions;
        case 6:
            return submissions.sort((a, b) => b.times - a.times);
        case 7:
            return submissions.sort((a, b) => (a.when < b.when) ? 1 : ((b.when < a.when) ? -1 : 0));
        default:
            return submissions.sort((a, b) => b.evaluations[metricChoose].score - a.evaluations[metricChoose].score);
    }
};

const _renderSubmissions = (pageNr, submissions, gridGap, metricChoose, sortBy, headerElements) => {
    const n = (pageNr - 1) * ELEMENTS_PER_PAGE;

    if (submissions) {
        submissions = sortBySwitch(submissions, metricChoose, sortBy);
        submissions = submissions.slice(n, n + ELEMENTS_PER_PAGE);
        return (
            <FlexColumn as='tbody' width='100%'>
                {submissions.map(({
                                      submitter,
                                      when,
                                      evaluations,
                                      times
                                  }, index) => {
                    return (
                        <Grid as='tr' key={`leaderboard-row-${index}`}
                              backgroundColor={index % 2 === 1 ? theme.colors.dark01 : 'transparent'}
                              gridTemplateColumns={!IS_MOBILE() ? '1fr 3fr ' + '2fr '.repeat(evaluations.length) + '1fr 2fr' : '1fr 3fr 1fr 1fr 2fr'}
                              gridGap='20px' position='relative' width='100%' padding='4px'>
                            {index === 0 ? headerElements.map((elem, i) => {
                                return (
                                    <FlexRow alignmentX='flex-start'>
                                        <Medium key={`leaderboard-header-${i}`}
                                                textAlign={elem === 'submitter' ? 'left' : 'right'}
                                                width={elem === 'when' ? '100%' : 'auto'} padding='0 6px 0 0'
                                                minWidth={elem === 'result' ? '72px' : 'none'} fontSize='18px' as='td'>
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
                            {index === 0 ? <Line height='2px' top='38px' shadow={theme.shadow}/> : ''}
                            <Body as='td'>
                                {index + n}
                            </Body>
                            <Body as='td'>
                                {submitter ? submitter : '[anonymous]'}
                            </Body>
                            {!IS_MOBILE() ? evaluations.map((metric, i) => {
                                return (
                                    <Body key={`metric-result-${i}`} as='td' textAlign='left' minWidth='72px'>
                                        {metric.score.slice(0, 7)}
                                    </Body>
                                );
                            }) : <Body as='td' textAlign='left' minWidth='72px'>
                                {evaluations[metricChoose] ? evaluations[metricChoose].score.slice(0, 7) : 'xxx'}
                            </Body>}
                            <Body as='td' padding='0 2px 0 0' textAlign='left'>
                                {times ? times : 1}
                            </Body>
                            <Body as='td' textAlign='right'>
                                {when ? `${when.slice(11, 16)} ${when.slice(0, 10)}`
                                    : 'xxx'}
                            </Body>
                            {index !== 0 ? <Line top='0' as='td'/> : ''}
                        </Grid>
                    );
                })}
            </FlexColumn>
        );
    }
};

export default _renderSubmissions;