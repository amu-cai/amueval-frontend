import React from "react";
import {Body, H1} from "../../utils/fonts";
import {FlexColumn, FlexRow, Svg} from "../../utils/containers";
import Search from "../../components/elements/Search";
import Pager from "../../components/elements/Pager";
import FiltersMenu from "../../components/elements/FiltersMenu";
import _searchQueryHandler from "./_searchQueryHandler";
import _renderChallenges from "./_renderChallenges";
import Media from "react-media";
import theme from "../../utils/theme";
import cupIco from '../../assets/cup_ico.svg';
import getChallenges from "../../api/getChallenges";
import {CALC_PAGES} from "../../utils/globals";
import Loading from "../../components/elements/Loading";

const Challenges = () => {
    const [pageNr, setPageNr] = React.useState(1);
    const [challengesFromAPI, setChallengesFromAPI] = React.useState([]);
    const [challenges, setChallenges] = React.useState([]);
    const [filtersMenu, setFiltersMenu] = React.useState(false);
    const [sortBy, setSortBy] = React.useState(0);
    const [status, setStatus] = React.useState(0);
    const [challengeType, setChallengeType] = React.useState(0);
    const [commercial, setCommercial] = React.useState(0);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        challengesRequest();
    }, []);

    const challengesRequest = () => {
        getChallenges(setChallengesFromAPI);
        getChallenges(setChallenges, setLoading);
    }

    const sortByHandler = (value) => {
        setSortBy(value);
    }

    const statusHandler = (value) => {
        setStatus(value)
    }

    const challengeTypeHandler = (value) => {
        setChallengeType(value);
    }

    const commercialHandler = (value) => {
        setCommercial(value);
    }

    const searchQueryHandler = (event) => {
        _searchQueryHandler(event, challengesFromAPI, setPageNr, setChallenges);
    }

    const nextPage = () => {
        if (pageNr !== CALC_PAGES(challenges)) {
            let newPage = pageNr + 1;
            setPageNr(newPage);
        }
    }

    const previousPage = () => {
        if (pageNr !== 1) {
            let newPage = pageNr - 1;
            setPageNr(newPage);
        }
    }

    const renderChallenges = () => {
        return _renderChallenges(pageNr, challenges);
    }

    const toggleFiltersMenu = () => {
        let newFiltersMenu = !filtersMenu;
        setFiltersMenu(newFiltersMenu);
    }

    const mobileRender = () => {
        return (
            <>
                <FiltersMenu translateX={filtersMenu ? '0' : '100vw'} opacity={filtersMenu ? '1' : '0'}
                             toggleFiltersMenu={toggleFiltersMenu}
                             sortByHandler={sortByHandler} statusHandler={statusHandler}
                             challengeTypeHandler={challengeTypeHandler} commercialHandler={commercialHandler}
                             sortBy={sortBy} status={status} challengeType={challengeType} commercial={commercial}/>
                <FlexColumn as='main' alignmentY='flex-start' width='100%'
                            minHeight='100vh' padding='90px 0 32px 0'>
                    <FlexColumn alignmentX='flex-start' width='80%'>
                        <H1 as='h1' margin='0 0 20px 0'>
                            Challenges
                        </H1>
                        <Search searchQueryHandler={searchQueryHandler} toggleFiltersMenu={toggleFiltersMenu}/>
                        <FlexColumn width='100%'>
                            <Loading visible={loading}/>
                            {renderChallenges()}
                        </FlexColumn>
                    </FlexColumn>
                    <Pager visible={!loading} pageNr={pageNr} pages={CALC_PAGES(challenges)}
                           nextPage={nextPage} previousPage={previousPage}/>
                </FlexColumn>
            </>
        );
    }

    const desktopRender = () => {
        return (
            <>
                <FiltersMenu toggleFiltersMenu={toggleFiltersMenu} transBackDisplay='none'
                             sortByHandler={sortByHandler} statusHandler={statusHandler}
                             challengeTypeHandler={challengeTypeHandler} commercialHandler={commercialHandler}
                             sortBy={sortBy} status={status} challengeType={challengeType} commercial={commercial}/>
                <FlexColumn as='main' alignmentY='flex-start' width='100%'
                            minHeight='100vh' padding='112px 0 82px 310px'>
                    <FlexColumn alignmentX='flex-start'>
                        <FlexRow width='100%' gap='32px'>
                            <FlexColumn alignmentX='flex-start' gap='32px' width='75%' maxWidth='720px'>
                                <H1 as='h1'>
                                    Challenges
                                </H1>
                                <Body margin='0 0 12px 0' maxWidth='400px'>
                                    Increase your machine learning skills by competing in our exciting challenges.
                                </Body>
                                <Search searchQueryHandler={searchQueryHandler} toggleFiltersMenu={toggleFiltersMenu}/>
                            </FlexColumn>
                            <Svg src={cupIco} size='contain' width='25%'
                                 height='160px' backgroundColor={theme.colors.green}/>
                        </FlexRow>
                        <FlexColumn width='100%'>
                            <Loading visible={loading}/>
                            {renderChallenges()}
                        </FlexColumn>
                    </FlexColumn>
                    <Pager visible={!loading} pageNr={pageNr} pages={CALC_PAGES(challenges)}
                           nextPage={nextPage} previousPage={previousPage}/>
                </FlexColumn>
            </>
        );
    }

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
}

export default Challenges;