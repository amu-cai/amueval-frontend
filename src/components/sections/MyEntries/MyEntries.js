import React from 'react';
import {FlexColumn} from '../../../utils/containers';
import {H2} from '../../../utils/fonts';
import getMyEntries from '../../../api/getMyEntries';
import Pager from '../../elements/Pager';
import {CALC_PAGES} from '../../../utils/globals';
import Media from 'react-media';
import theme from '../../../utils/theme';
import _tableSearchQueryHandler from '../Leaderboard/_tableSearchQueryHandler';
import Loading from '../../elements/Loading';
import _renderMySubmissions from './_renderMySubmissions';

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

    const renderSubmissions = (gridGap, headerElements) => {
        return _renderMySubmissions(pageNr, myEntries
            ? myEntries : [], gridGap, metricChoose, sortBy, headerElements);
    };

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
        getMyEntries(props.challengeName, setMyEntriesFromAPI);
        getMyEntries(props.challengeName, setMyEntries, setLoading);
    };

    const sortByHandler = (value) => {
        setSortBy(value);
    };

    const mobileRender = () => {

    }

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
                    <FlexColumn as='table' margin='32px 0 72px 0' width='100%'>
                        {renderSubmissions('32px', getMyEntriesHeader())}
                    </FlexColumn>
                    {/*<Table challengeName={props.challengeName} loading={loading}*/}
                    {/*       renderElements={renderSubmissions}*/}
                    {/*       headerElements={getMyEntriesHeader()}/>*/}
                    <Pager pageNr={pageNr} width='72px' borderRadius='64px'
                           pages={CALC_PAGES(myEntries.submissions ? myEntries.submissions : [])}
                           nextPage={nextPage} previousPage={previousPage}
                           number={`${pageNr} / ${CALC_PAGES(myEntries.submissions ? myEntries.submissions : [])}`}/>
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