import React from 'react';
import {FlexColumn} from '../../utils/containers';
import {H2} from '../../utils/fonts';
import getMyEntries from '../../api/getMyEntries';
import Pager from '../elements/Pager';
import {CALC_PAGES, EVALUATIONS_FORMAT, RENDER_WHEN} from '../../utils/globals';
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
    const [whenSorted, setWhenSorted] = React.useState(false);
    const [scoreSorted, setScoreSorted] = React.useState(false);
    /* eslint-disable */

    React.useEffect(() => {
        challengesRequest();
    }, []);

    const tableSearchQueryHandler = (event) => {
        _tableSearchQueryHandler(event, myEntriesFromAPI, setPageNr, setMyEntries);
    };

    const getPossibleMetrics = () => {
        let metrics = [];
        for (let test of myEntriesFromAPI.tests) {
            let myEval = `${test.metric}.${test.name}`;
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
        getMyEntries(props.challengeName, setMyEntriesFromAPI, setMyEntries, setLoading);
    };

    const mobileRender = () => {

    }

    const sortByUpdate = (elem, i) => {
        let newEntries = myEntries;
        switch (elem) {
            case '#':
                break;
            case 'when':
                if (whenSorted) {
                    newEntries = newEntries.sort((a, b) => (a.when < b.when) ? 1 : ((b.when < a.when) ? -1 : 0));
                    setWhenSorted(false);
                } else {
                    newEntries = newEntries.sort((a, b) => (a.when > b.when) ? 1 : ((b.when > a.when) ? -1 : 0));
                    setWhenSorted(true);
                }
                break;
            default:
                if (scoreSorted) {
                    newEntries = newEntries.sort((a, b) => a.evaluations[elem] - b.evaluations[elem]);
                    setScoreSorted(false);
                } else {
                    newEntries = newEntries.sort((a, b) => b.evaluations[elem] - a.evaluations[elem]);
                    setScoreSorted(true);
                }
                break;
        }
        setMyEntries(newEntries);
    };

    const desktopRender = () => {
        return (
            <FlexColumn padding='24px' as='section' width='100%' maxWidth='1400px'>
                <H2 as='h2' margin='0 0 32px 0'>
                    My entries
                </H2>
                {myEntries && !loading ?
                    <>
                        <Table challengeName={props.challengeName} headerElements={getMyEntriesHeader()}
                               possibleMetrics={getPossibleMetrics()}
                               gridTemplateColumns={'1fr ' + '4fr '.repeat(getMyEntriesHeader().length - 1)}
                               staticColumnElements={
                                   [
                                       {name: 'id', format: null, order: 1, align: 'left'},
                                       {name: 'when', format: RENDER_WHEN, order: 3, align: 'right'}
                                   ]
                               }
                               iterableColumnElement={{
                                   name: 'evaluations',
                                   format: EVALUATIONS_FORMAT,
                                   order: 2,
                                   align: 'left'
                               }}
                               pageNr={pageNr} elements={myEntries}
                               sortByUpdate={sortByUpdate}/>
                        <Pager pageNr={pageNr} width='72px' borderRadius='64px'
                               pages={CALC_PAGES(myEntries, 2)}
                               nextPage={nextPage} previousPage={previousPage}
                               number={`${pageNr} / ${CALC_PAGES(myEntries, 2)}`}/>
                    </>
                    : <Loading/>}
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

export default MyEntries;