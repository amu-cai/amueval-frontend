import React from 'react';
import Media from 'react-media';
import theme from '../../../utils/theme';
import {FlexColumn, FlexRow} from '../../../utils/containers';
import {H2, H3} from '../../../utils/fonts';
import Table from '../../elements/Table';
import PropsTypes from 'prop-types';
import getChallengeLeaderboard from '../../../api/getChallengeLeaderboard';
import _renderSubmissions from './_renderSubmissions';
import _tableSearchQueryHandler from './_tableSearchQueryHandler';
import {CALC_PAGES} from '../../../utils/globals';
import Search from '../../elements/Search';
import Pager from '../../elements/Pager';
import Filter from '../../elements/Filter';
import FilterBy from '../FilterBy';
import sortOptions from './sortOptions';

const Leaderboard = (props) => {
    const headerElements = ['#', 'submitter', 'result', 'entries', 'when'];
    const [entriesFromApi, setEntriesFromApi] = React.useState([]);
    const [entries, setEntries] = React.useState([]);
    const [pageNr, setPageNr] = React.useState(1);
    const [loading, setLoading] = React.useState(true);
    const [metricChoose, setMetricChoose] = React.useState(0);
    const [sortBy, setSortBy] = React.useState(5);

    React.useEffect(() => {
        challengeDataRequest(props.challengeName);
    }, [props.challengeName]);

    const challengeDataRequest = (challengeName) => {
        getChallengeLeaderboard(setEntriesFromApi, challengeName);
        getChallengeLeaderboard(setEntries, challengeName, setLoading);
    };

    const renderSubmissions = (gridGap) => {
        return _renderSubmissions(pageNr, entries
            ? entries : [], gridGap, metricChoose, sortBy);
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

    const sortByHandler = (value) => {
        setSortBy(value);
    };

    const mobileRender = () => {
        return (
            <FlexColumn padding='24px 12px' as='section' id='start'>
                <H2 as='h2' margin='0 0 12px 0'>
                    Leaderboard
                </H2>
                <Search searchQueryHandler={tableSearchQueryHandler}/>
                {!loading ? <FlexRow width='100%' gap='16px' as='section' margin='16px 0'>
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
                </FlexRow> : ''}
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
                <Search searchQueryHandler={tableSearchQueryHandler}/>
                <FlexRow gap='40px' margin='32px 0'>
                    {!loading ? <>
                        <FilterBy header='Sort by' options={sortOptions} gridTemplateColumns='auto auto auto auto'
                                  option={sortBy} textAlign='center'
                                  alignmentX='center' handler={sortByHandler}/>
                        <FlexColumn gap='32px' as='section'>
                            <H3>
                                Metric
                            </H3>
                            <FlexRow gap='32px'>
                                {getPossibleMetrics() ? getPossibleMetrics().map((metric, index) => {
                                    return (
                                        <Filter option={metricChoose} index={index} borderRadius='4px' width='200px'
                                                height='40px'
                                                key={`metric-${index}`} handler={metricChooseHandler}
                                                id={`metric-${index}`} name={`metric-${index}`}>
                                            {metric}
                                        </Filter>);
                                }) : ''}
                            </FlexRow>
                        </FlexColumn>
                    </> : ''}
                </FlexRow>
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