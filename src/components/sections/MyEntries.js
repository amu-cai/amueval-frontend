import React from 'react';
import {FlexColumn} from '../../utils/containers';
import {H2} from '../../utils/fonts';
import getMyEntries from '../../api/getMyEntries';
import Pager from '../elements/Pager';
import {CALC_PAGES, RENDER_WHEN} from '../../utils/globals';
import Media from 'react-media';
import theme from '../../utils/theme';
import _tableSearchQueryHandler from './Leaderboard/_tableSearchQueryHandler';
import Loading from '../elements/Loading';
import Table from '../elements/Table';

const MyEntries = (props) => {
    const [myEntriesFromAPI, setMyEntriesFromAPI] = React.useState({});
    const [myEntries, setMyEntries] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [pageNr, setPageNr] = React.useState(1);
    /* eslint-disable */
    const [metricChoose, setMetricChoose] = React.useState(0);
    const [sortBy, setSortBy] = React.useState(5);

    React.useEffect(() => {
        challengesRequest();
    }, []);

    const tableSearchQueryHandler = (event) => {
        _tableSearchQueryHandler(event, myEntriesFromAPI, setPageNr, setMyEntries);
    };

    const getPossibleMetrics = () => {
        let metrics = [];
        for (let test of myEntriesFromAPI.tests) {
            let myEval = `${test.metric} ${test.name}`;
            if (myEval && !metrics.includes(myEval)) {
                metrics.push(myEval);
            }
        }
        return metrics;
    }

    const nextPage = () => {
        if (pageNr !== CALC_PAGES(myEntries ? myEntries : [])) {
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

    const getMyEntriesHeader = () => {
        let header = ['#'];
        for (let myEval of getPossibleMetrics()) {
            header.push(myEval);
        }
        header.push('when');
        return header;
    };

    const challengesRequest = () => {
        getMyEntries(props.challengeName, setMyEntriesFromAPI, setLoading);
        getMyEntries(props.challengeName, setMyEntries, setLoading);
    };

    const mobileRender = () => {

    }

    const renderEvalResult = (evaluations, test) => {
        for (let myEval of evaluations) {
            if (myEval.test.name === test.name && myEval.test.metric === test.metric) {
                return myEval.score.slice(0, 7);
            }
        }
        return 'xxx';
    };

    const sortByUpdate = (elem) => {
        let newEntries = myEntries;
        return myEntries;
    };

    const desktopRender = () => {
        if (loading) {
            return (
                <Loading/>
            );
        } else {
            return (
                <FlexColumn padding='24px' as='section' width='100%' maxWidth='1400px'>
                    <H2 as='h2' margin='0 0 32px 0'>
                        My entries
                    </H2>
                    {myEntries.submissions ?
                        <>
                            <Table challengeName={props.challengeName} loading={loading}
                                   headerElements={getMyEntriesHeader()}
                                   gridTemplateColumns={'1fr ' + '4fr '.repeat(getMyEntriesHeader().length - 1)}
                                   staticColumnElements={
                                       [
                                           {name: 'id', format: null, order: 1, align: 'left'},
                                           {name: 'when', format: RENDER_WHEN, order: 3, align: 'right'}
                                       ]
                                   }
                                   metrics={getPossibleMetrics()} myEntries={myEntries}
                                   renderEvalResult={renderEvalResult}
                                   pageNr={pageNr} elements={myEntries.submissions}
                                   sortByUpdate={sortByUpdate}/>
                            <Pager pageNr={pageNr} width='72px' borderRadius='64px'
                                   pages={CALC_PAGES(myEntries.submissions, 2)}
                                   nextPage={nextPage} previousPage={previousPage}
                                   number={`${pageNr} / ${CALC_PAGES(myEntries.submissions, 2)}`}/>
                        </>
                        : <Loading/>}
                </FlexColumn>
            );
        }
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

export default MyEntries;