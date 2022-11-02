import React from 'react';
import {FlexColumn, FlexRow, Grid, Svg} from '../../utils/containers';
import Media from 'react-media';
import theme from '../../utils/theme';
import Loading from './Loading';
import PropsTypes from 'prop-types';
import {ELEMENTS_PER_PAGE, IS_MOBILE} from '../../utils/globals';
import {Body, Medium} from '../../utils/fonts';
import arrow from '../../assets/arrow.svg';
import styled from 'styled-components';

const Line = styled(FlexRow)`
  position: absolute;
  top: ${({top}) => top ? top : 'auto'};
  bottom: ${({bottom}) => bottom ? bottom : 'auto'};
  left: 0;
  width: 100%;
  background-color: ${({theme}) => theme.colors.dark04};
  height: ${({height}) => height ? height : '1px'};
`;

const Table = (props) => {
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const mobileRender = () => {
        return (
            <FlexColumn as='table' margin='20px 0 32px 0' minHeight='380px'>
                {/*{props.renderElements('10px', props.headerElements)}*/}
            </FlexColumn>
        );
    };

    const desktopRender = () => {
        const n = (props.pageNr - 1) * ELEMENTS_PER_PAGE;
        let submissionToMap = props.submissions.slice(n, n + ELEMENTS_PER_PAGE);
        return (
            <FlexColumn as='table' margin='32px 0 72px 0' width='100%'>
                <FlexColumn as='tbody' width='100%'>
                    {submissionToMap.map(({
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
                                {index === 0 ? props.headerElements.map((elem, i) => {
                                    return (
                                        <FlexRow key={`leaderboard-header-${i}`} alignmentX='flex-start' as='td'
                                                 onClick={() => {
                                                     props.sortByUpdate(elem);
                                                     forceUpdate();
                                                 }}>
                                            <Medium textAlign={elem === 'submitter' ? 'left' : 'right'}
                                                    width={elem === 'when' ? '100%' : 'auto'} padding='0 6px 0 0'
                                                    minWidth={elem === 'result' ? '72px' : 'none'} fontSize='18px'>
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
                                {index === 0 ? <Line as='td' height='2px' top='38px' shadow={theme.shadow}/> : ''}
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
                                    {evaluations[0] ? evaluations[0].score.slice(0, 7) : 'xxx'}
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
            </FlexColumn>
        );
    };

    return (
        <>
            <Loading visible={props.loading}/>
            <Media query={theme.mobile}>
                {!props.loading ? mobileRender() : ''}
            </Media>
            <Media query={theme.desktop}>
                {!props.loading ? desktopRender() : ''}
            </Media>
        </>
    );
};

Table.propTypes = {
    challengeName: PropsTypes.string,
    loading: PropsTypes.bool,
    renderElements: PropsTypes.func,
    headerElements: PropsTypes.arrayOf(PropsTypes.string),
};

Table.defaultProps = {
    challengeName: '',
    loading: true,
    renderElements: null,
    headerElements: [],
};

export default Table;