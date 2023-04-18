import React from 'react';
import Media from 'react-media';
import theme from '../../utils/theme';
import getChallenges from '../../api/getChallenges';
import { CHALLENGES_STATUS_FILTER } from '../../utils/globals';
import FiltersMenu from '../../components/challenges_list/FiltersMenu';
import statusFilter from './statusFilter';
import ChallengesMobile from './ChallengesMobile';
import ChallengesDesktop from './ChallengesDesktop';
import challengeSearchQueryHandler from './challengeSearchQueryHandler';

const Challenges = () => {
  const [pageNr, setPageNr] = React.useState(1);
  const [challengesFromAPI, setChallengesFromAPI] = React.useState([]);
  const [challenges, setChallenges] = React.useState([]);
  const [challengesFiltered, setChallengesFiltered] = React.useState([]);
  const [filtersMenu, setFiltersMenu] = React.useState(false);
  const [sortBy, setSortBy] = React.useState(0);
  const [status, setStatus] = React.useState(CHALLENGES_STATUS_FILTER.BOTH);
  const [challengeType, setChallengeType] = React.useState(0);
  const [commercial, setCommercial] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    challengesRequest();
  }, []);

  React.useEffect(() => {
    statusFilter(status, challenges, setChallengesFiltered);
  }, [status, challenges]);

  const challengesRequest = () => {
    getChallenges(
      [setChallengesFromAPI, setChallenges, setChallengesFiltered],
      setLoading
    );
  };

  const searchQueryHandler = (event) => {
    challengeSearchQueryHandler(
      event,
      challengesFromAPI,
      setPageNr,
      setChallenges
    );
  };

  const toggleFiltersMenu = () => {
    let newFiltersMenu = !filtersMenu;
    setFiltersMenu(newFiltersMenu);
  };

  const filtersMenuRender = (
    translateX = '0',
    opacity = '1',
    transBackDisplay = 'none'
  ) => {
    return (
      <FiltersMenu
        toggleFiltersMenu={toggleFiltersMenu}
        sortByHandler={setSortBy}
        statusHandler={setStatus}
        challengeTypeHandler={setChallengeType}
        commercialHandler={setCommercial}
        sortBy={sortBy}
        status={status}
        challengeType={challengeType}
        commercial={commercial}
        translateX={translateX}
        opacity={opacity}
        transBackDisplay={transBackDisplay}
      />
    );
  };

  return (
    <>
      <Media query={theme.mobile}>
        <ChallengesMobile
          filtersMenuRender={filtersMenuRender}
          filtersMenu={filtersMenu}
          searchQueryHandler={searchQueryHandler}
          toggleFiltersMenu={toggleFiltersMenu}
          loading={loading}
          pageNr={pageNr}
          setPageNr={setPageNr}
          challengesFiltered={challengesFiltered}
        />
      </Media>
      <Media query={theme.desktop}>
        <ChallengesDesktop
          filtersMenuRender={filtersMenuRender}
          filtersMenu={filtersMenu}
          searchQueryHandler={searchQueryHandler}
          toggleFiltersMenu={toggleFiltersMenu}
          loading={loading}
          pageNr={pageNr}
          setPageNr={setPageNr}
          challengesFiltered={challengesFiltered}
        />
      </Media>
    </>
  );
};

export default Challenges;
