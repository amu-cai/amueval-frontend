import React from 'react';
import Media from 'react-media';
import theme from '../../../utils/theme';
import {FlexColumn, FlexRow} from '../../../utils/containers';
import {H2, H3} from '../../../utils/fonts';
import Table from '../../elements/Table';
// import styled from 'styled-components';
import PropsTypes from 'prop-types';
import getChallengeLeaderboard from '../../../api/getChallengeLeaderboard';
import _renderSubmissions from './_renderSubmissions';
import _tableSearchQueryHandler from './_tableSearchQueryHandler';
import {CALC_PAGES} from '../../../utils/globals';
import Search from '../../elements/Search';
import Pager from '../../elements/Pager';
import Filter from '../../elements/Filter';

// const BoardVariantMobile = styled(FlexRow)`
//   transition: color, background-color 0.3s ease-in-out;
//   background-color: ${({theme, active}) => active ? theme.colors.dark : theme.colors.white};
//   color: ${({theme, active}) => active ? theme.colors.white : theme.colors.dark};
//   font-size: 10px;
//   font-family: 'Roboto', sans-serif;
//   font-weight: 300;
//   border-radius: 16px;
//   border: 1px solid ${({theme}) => theme.colors.dark};
//   padding: 6px 8px;
//   cursor: pointer;
//   box-shadow: ${({theme}) => theme.shadowRight};
//
//   * {
//     cursor: pointer;
//   }
//
//   &:hover {
//     background-color: ${({theme, active}) => active ? theme.colors.dark : theme.colors.white};
//     color: ${({theme, active}) => active ? theme.colors.white : theme.colors.dark};
//   }
// `;

// const BoardVariantDesktop = styled(FlexRow)`
//   transition: background-color 0.3s ease-in-out;
//   border: 1px solid ${({theme}) => theme.colors.green05};
//   background-color: ${({theme, active}) => active ? theme.colors.green05 : theme.colors.white};
//
//   &:hover {
//     background-color: ${({theme}) => theme.colors.green05};
//   }
//
//   div {
//     text-transform: uppercase;
//   }
// `;

const Leaderboard = (props) => {
    // const [variant, setVariant] = React.useState(0);
    const headerElements = ['#', 'submitter', 'result', 'entries', 'when'];
    const [entriesFromApi, setEntriesFromApi] = React.useState([]);
    const [entries, setEntries] = React.useState([]);
    const [pageNr, setPageNr] = React.useState(1);
    const [loading, setLoading] = React.useState(true);
    const [metricChoose, setMetricChoose] = React.useState(0);

    React.useEffect(() => {
        challengeDataRequest(props.challengeName);
    }, [props.challengeName]);

    const challengeDataRequest = (challengeName) => {
        getChallengeLeaderboard(setEntriesFromApi, challengeName);
        getChallengeLeaderboard(setEntries, challengeName, setLoading);
    };

    const renderSubmissions = (gridGap) => {
        return _renderSubmissions(pageNr, entries
            ? entries : [], gridGap, metricChoose);
    };

    const tableSearchQueryHandler = (event) => {
        _tableSearchQueryHandler(event, entriesFromApi, setPageNr, setEntries);
    };

    const nextPage = () => {
        if (pageNr !== CALC_PAGES(entries ? entries : [])) {
            let newPage = pageNr + 1;
            setPageNr(newPage);
        }
    };

    const previousPage = () => {
        if (pageNr !== 1) {
            let newPage = pageNr - 1;
            setPageNr(newPage);
        }
    };

    const getPossibleMetrics = () => {
        let metrics = [];
        for (let entry of entriesFromApi) {
            for (let evaluation of entry.evaluations) {
                let metric = evaluation.test.metric;
                if (metric && !metrics.includes(metric)) {
                    metrics.push(metric);
                }
            }
        }
        return metrics;
    };

    const metricChooseHandler = (value) => {
        setMetricChoose(value);
    };

    const mobileRender = () => {
        return (
            <FlexColumn padding='24px 12px' as='section'>
                <H2 as='h2' margin='0 0 12px 0'>
                    Leaderboard
                </H2>
                {/*<FlexRow gap='12px' margin='0 0 24px 0'>*/}
                {/*    <BoardVariantMobile as='button' active={0 === variant} onClick={() => setVariant(0)}>*/}
                {/*        By user*/}
                {/*    </BoardVariantMobile>*/}
                {/*    <BoardVariantMobile as='button' active={1 === variant} onClick={() => setVariant(1)}>*/}
                {/*        By metric*/}
                {/*    </BoardVariantMobile>*/}
                {/*</FlexRow>*/}
                <FlexRow width='100%' gap='16px' as='section' margin='16px 0'>
                    <H3>
                        Metric:
                    </H3>
                    {getPossibleMetrics() ? getPossibleMetrics().map((metric, index) => {
                        return (
                            <Filter option={metricChoose} index={index} borderRadius='4px'
                                    key={`metric-${index}`} handler={metricChooseHandler}
                                    id={`metric-${index}`} name={`metric-${index}`}>
                                {metric}
                            </Filter>);
                    }) : ''}
                </FlexRow>
                <Search searchQueryHandler={tableSearchQueryHandler}/>
                <Table challengeName={props.challengeName} loading={loading}
                       renderElements={renderSubmissions} headerElements={headerElements}/>
                <Pager pageNr={pageNr} width='48px' borderRadius='64px'
                       pages={CALC_PAGES(entries ? entries : [])}
                       nextPage={nextPage} previousPage={previousPage}
                       number={`${pageNr} / ${CALC_PAGES(entries ? entries : [])}`}/>
            </FlexColumn>
        );
    };

    const desktopRender = () => {
        return (
            <FlexColumn padding='24px' as='section' width='100%' maxWidth='800px'>
                <H2 as='h2' margin='0 0 32px 0'>
                    Leaderboard
                </H2>
                {/*<FlexRow border={`1px solid ${theme.colors.green05}`} margin='0 0 48px 0'>*/}
                {/*    <BoardVariantDesktop as='button' width='150px' height='48px'*/}
                {/*                         active={0 === variant} onClick={() => setVariant(0)}>*/}
                {/*        <H3 as='span'>*/}
                {/*            By user*/}
                {/*        </H3>*/}
                {/*    </BoardVariantDesktop>*/}
                {/*    <BoardVariantDesktop as='button' width='150px' height='48px'*/}
                {/*                         active={1 === variant} onClick={() => setVariant(1)}>*/}
                {/*        <H3 as='span'>*/}
                {/*            By metric*/}
                {/*        </H3>*/}
                {/*    </BoardVariantDesktop>*/}
                {/*</FlexRow>*/}
                <FlexRow width='100%' gap='32px' as='section' margin='32px 0'>
                    <H3>
                        Metric:
                    </H3>
                    {getPossibleMetrics() ? getPossibleMetrics().map((metric, index) => {
                        return (
                            <Filter option={metricChoose} index={index} borderRadius='4px' width='200px' height='40px'
                                    key={`metric-${index}`} handler={metricChooseHandler}
                                    id={`metric-${index}`} name={`metric-${index}`}>
                                {metric}
                            </Filter>);
                    }) : ''}
                </FlexRow>
                <Search searchQueryHandler={tableSearchQueryHandler}/>
                <Table challengeName={props.challengeName} loading={loading}
                       renderElements={renderSubmissions}
                       headerElements={headerElements}/>
                <Pager pageNr={pageNr} width='72px' borderRadius='64px'
                       pages={CALC_PAGES(entries ? entries : [])}
                       nextPage={nextPage} previousPage={previousPage}
                       number={`${pageNr} / ${CALC_PAGES(entries ? entries : [])}`}/>
            </FlexColumn>
        );
    };

    return (
        <>
            <Media query={theme.mobile}>
                {mobileRender()}
            </Media>
            <Media query={theme.desktop}>
                {desktopRender()}
            </Media>
        </>
    );
};

Leaderboard.propsTypes = {
    challengeName: PropsTypes.string,
};

Leaderboard.defaultProps = {
    challengeName: '',
};

export default Leaderboard;