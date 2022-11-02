import React from 'react';
import Media from 'react-media';
import theme from '../../../utils/theme';
import {FlexColumn} from '../../../utils/containers';
import {H2} from '../../../utils/fonts';
import Table from '../../elements/Table';
import PropsTypes from 'prop-types';
import getChallengeLeaderboard from '../../../api/getChallengeLeaderboard';
import _tableSearchQueryHandler from './_tableSearchQueryHandler';
import {CALC_PAGES} from '../../../utils/globals';
import Search from '../../elements/Search';
import Pager from '../../elements/Pager';

const Leaderboard = (props) => {
    const [entriesFromApi, setEntriesFromApi] = React.useState([]);
    const [entries, setEntries] = React.useState([]);
    const [pageNr, setPageNr] = React.useState(1);
    const [loading, setLoading] = React.useState(true);
    const [submitterSorted, setSubmitterSorted] = React.useState(false);
    const [entriesSorted, setEntriesSorted] = React.useState(false);
    const [whenSorted, setWhenSorted] = React.useState(false);
    const [scoreSorted, setScoreSorted] = React.useState(false);

    React.useEffect(() => {
        challengeDataRequest(props.challengeName);
    }, [props.challengeName]);

    const challengeDataRequest = (challengeName) => {
        getChallengeLeaderboard(setEntriesFromApi, challengeName);
        getChallengeLeaderboard(setEntries, challengeName, setLoading);
    };

    const getMetricIndex = (metricName) => {
        let i = 0;
        for (let evaluation of entriesFromApi[0].evaluations) {
            if (evaluation.test.metric === metricName) {
                return i;
            }
            i++;
        }
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

    const getLeaderboardHeader = () => {
        let header = ['#', 'submitter'];
        for (let metric of getPossibleMetrics()) {
            header.push(metric);
        }
        header.push('entries');
        header.push('when');
        return header;
    };

    const sortByUpdate = (elem) => {
        let newEntries = entries;
        console.log(elem);
        switch (elem) {
            case 'submitter':
                if (submitterSorted) {
                    newEntries = newEntries.sort((a, b) => (a.submitter > b.submitter) ? 1 : ((b.submitter > a.submitter) ? -1 : 0));
                    setSubmitterSorted(false);
                } else {
                    newEntries = newEntries.sort((a, b) => (a.submitter < b.submitter) ? 1 : ((b.submitter < a.submitter) ? -1 : 0));
                    setSubmitterSorted(true);
                }
                break;
            case 'entries':
                if (entriesSorted) {
                    newEntries = newEntries.sort((a, b) => a.times - b.times);
                    setEntriesSorted(false);
                } else {
                    newEntries = newEntries.sort((a, b) => b.times - a.times);
                    setEntriesSorted(true);
                }
                break;
            case 'when':
                if (whenSorted) {
                    newEntries = newEntries.sort((a, b) => (a.when > b.when) ? 1 : ((b.when > a.when) ? -1 : 0));
                    setWhenSorted(false);
                } else {
                    newEntries = newEntries.sort((a, b) => (a.when < b.when) ? 1 : ((b.when < a.when) ? -1 : 0));
                    setWhenSorted(true);
                }
                break;
            default:
                // eslint-disable-next-line no-case-declarations
                let metricIndex = getMetricIndex(elem);
                if (scoreSorted) {
                    newEntries = newEntries.sort((a, b) => b.evaluations[metricIndex].score - a.evaluations[metricIndex].score);
                    setScoreSorted(false);
                } else {
                    newEntries = newEntries.sort((a, b) => a.evaluations[metricIndex].score - b.evaluations[metricIndex].score);
                    setScoreSorted(true);
                }
                break;
        }
        setEntries(newEntries);
    };

    const mobileRender = () => {
        return (
            <FlexColumn padding='24px 12px' as='section' id='start'>
                <H2 as='h2' margin='0 0 12px 0'>
                    Leaderboard
                </H2>
                <Search searchQueryHandler={tableSearchQueryHandler}/>
                <Table challengeName={props.challengeName} loading={loading}
                       headerElements={['#', 'submitter', 'result', 'entries', 'when']}
                       pageNr={pageNr} submissions={entries} sortByUpdate={sortByUpdate}/>
                <Pager pageNr={pageNr} width='48px' borderRadius='64px'
                       pages={CALC_PAGES(entries ? entries : [])}
                       nextPage={nextPage} previousPage={previousPage}
                       number={`${pageNr} / ${CALC_PAGES(entries ? entries : [])}`}/>
            </FlexColumn>
        );
    };

    const desktopRender = () => {
        return (
            <FlexColumn padding='24px' as='section' width='100%' maxWidth='1200px'>
                <H2 as='h2' margin='0 0 32px 0'>
                    Leaderboard
                </H2>
                <Search searchQueryHandler={tableSearchQueryHandler}/>
                <Table challengeName={props.challengeName} loading={loading} headerElements={getLeaderboardHeader()}
                       pageNr={pageNr} submissions={entries} sortByUpdate={sortByUpdate}/>
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