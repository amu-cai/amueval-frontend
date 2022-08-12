import React from 'react';
import {FlexColumn, FlexRow, Grid} from '../../../utils/containers';
import getChallengeLeaderboard from '../../../api/getChallengeLeaderboard';
import {H3, Medium} from '../../../utils/fonts';
import _renderSubmissions from './_renderSubmissions';
import Pager from '../Pager';
import {CALC_PAGES} from '../../../utils/globals';
import Media from 'react-media';
import theme from '../../../utils/theme';
import Loading from '../Loading';
import PropsTypes from 'prop-types';
import _tableSearchQueryHandler from './_tableSearchQueryHandler';
import Search from '../Search';

const Table = (props) => {
    const headerElements = ['#', 'submitter', 'result', 'entries', 'when'];
    const [entriesFromApi, setEntriesFromApi] = React.useState([]);
    const [entries, setEntries] = React.useState([]);
    const [pageNr, setPageNr] = React.useState(1);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        challengeDataRequest(props.challengeName);
    }, [props.challengeName]);

    const challengeDataRequest = (challengeName) => {
        getChallengeLeaderboard(setEntriesFromApi, challengeName);
        getChallengeLeaderboard(setEntries, challengeName, setLoading);
    };

    const renderSubmissions = (gridGap) => {
        return _renderSubmissions(pageNr, entries
            ? entries : [], gridGap);
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

    const mobileRender = () => {
        return (
            <>
                <Search searchQueryHandler={tableSearchQueryHandler}/>
                <FlexColumn as='table' margin='20px 0 32px 0' minHeight='380px'>
                    <Grid as='thead' gridTemplateColumns='1fr 3fr 1fr 1fr 2fr'
                          gridGap='10px' width='100%'>
                        {headerElements.map((elem, index) => {
                            return (
                                <FlexRow as='tr' key={`leaderboard-header-${index}`}
                                         alignmentX={(elem === '#' || elem === 'submitter') ? 'flex-start' : 'flex-end'}>
                                    <Medium as='th'>{elem}</Medium>
                                </FlexRow>
                            );
                        })}
                    </Grid>
                    {renderSubmissions('10px')}
                </FlexColumn>
                <Pager pageNr={pageNr} width='48px' borderRadius='64px'
                       pages={CALC_PAGES(entries ? entries : [])}
                       nextPage={nextPage} previousPage={previousPage}
                       number={`${pageNr} / ${CALC_PAGES(entries ? entries : [])}`}/>
            </>
        );
    };

    const desktopRender = () => {
        return (
            <>
                <Search searchQueryHandler={tableSearchQueryHandler}/>
                <FlexColumn as='table' margin='32px 0 72px 0' minHeight='438px' width='100%'>
                    <Grid as='thead' gridTemplateColumns='1fr 3fr 1fr 1fr 2fr'
                          gridGap='32px' width='100%' margin='0 0 28px 0'>
                        {headerElements.map((elem, index) => {
                            return (
                                <FlexRow as='tr' key={`leaderboard-header-${index}`}
                                         alignmentX={(elem === '#' || elem === 'submitter') ? 'flex-start' : 'flex-end'}>
                                    <H3 as='th'>{elem}</H3>
                                </FlexRow>
                            );
                        })}
                    </Grid>
                    {renderSubmissions('32px')}
                </FlexColumn>
                <Pager pageNr={pageNr} width='72px' borderRadius='64px'
                       pages={CALC_PAGES(entries ? entries : [])}
                       nextPage={nextPage} previousPage={previousPage}
                       number={`${pageNr} / ${CALC_PAGES(entries ? entries : [])}`}/>
            </>

        );
    };

    return (
        <>
            <Loading visible={loading}/>
            <Media query={theme.mobile}>
                {!loading ? mobileRender() : ''}

            </Media>
            <Media query={theme.desktop}>
                {!loading ? desktopRender() : ''}
            </Media>
        </>
    );
};

Table.propTypes = {
    challengeName: PropsTypes.string,
};

Table.defaultProps = {
    challengeName: '',
};

export default Table;