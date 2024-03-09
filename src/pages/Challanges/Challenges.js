import React from 'react';
import Media from 'react-media';
import theme from '../../utils/theme';
import getChallenges from '../../api/getChallenges';
import { CHALLENGES_STATUS_FILTER } from '../../utils/globals';
import FiltersMenu from './components/FiltersMenu';
import statusFilterHandle from './functions/statusFilterHandle';
import ChallengesMobile from './components/ChallengesMobile';
import ChallengesDesktop from './components/ChallengesDesktop';
import challengeSearchQueryHandler from './functions/challengeSearchQueryHandler';
// import ChallengesReducer from './model/ChallengesReducer';

const Challenges = () => {
  const [allChallenges, setAllChallenges] = React.useState([]);
  const [challenges, setChallenges] = React.useState([]);
  const [challengesFiltered, setChallengesFiltered] = React.useState([]);

  const [pageNr, setPageNr] = React.useState(1);
  const [filtersMenu, setFiltersMenu] = React.useState(false);
  const [sortBy, setSortBy] = React.useState(0);
  const [statusFilter, setStatusFilter] = React.useState(
    CHALLENGES_STATUS_FILTER.BOTH
  );
  const [challengeTypeFilter, setChallengeTypeFilter] = React.useState(0);
  const [commercialFilter, setCommercialFilter] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getChallenges(setAllChallenges, setLoading);
  }, []);

  React.useEffect(() => {
    setChallenges(allChallenges);
    setChallengesFiltered(allChallenges);
  }, [allChallenges]);

  React.useEffect(() => {
    statusFilterHandle(statusFilter, challenges, setChallengesFiltered);
  }, [statusFilter, challenges]);

  const filtersMenuRender = React.useCallback(
    (translateX = '0', opacity = '1', transBackDisplay = 'none') => {
      return (
        <FiltersMenu
          setStatusFilter={setStatusFilter}
          setSortBy={setSortBy}
          setChallengeTypeFilter={setChallengeTypeFilter}
          setCommercialFilter={setCommercialFilter}
          setFiltersMenu={setFiltersMenu}
          filtersMenu={filtersMenu}
          sortBy={sortBy}
          status={statusFilter}
          challengeTypeFilter={challengeTypeFilter}
          commercialFilter={commercialFilter}
          translateX={translateX}
          opacity={opacity}
          transBackDisplay={transBackDisplay}
        />
      );
    },
    [filtersMenu, sortBy, statusFilter, challengeTypeFilter, commercialFilter]
  );

  const challengesToRender = challengesFiltered.filter(
    (challenge) => !challenge.deleted
  );

  return (
    <>
      <Media query={theme.mobile}>
        <ChallengesMobile
          setFiltersMenu={setFiltersMenu}
          filtersMenuRender={filtersMenuRender}
          searchQueryHandler={(event) =>
            challengeSearchQueryHandler(
              event,
              allChallenges,
              setChallenges,
              setPageNr
            )
          }
          setPageNr={setPageNr}
          filtersMenu={filtersMenu}
          loading={loading}
          pageNr={pageNr}
          challengesToRender={challengesToRender}
        />
      </Media>
      <Media query={theme.desktop}>
        <ChallengesDesktop
          setFiltersMenu={setFiltersMenu}
          filtersMenuRender={filtersMenuRender}
          searchQueryHandler={(event) =>
            challengeSearchQueryHandler(
              event,
              allChallenges,
              setChallenges,
              setPageNr
            )
          }
          setPageNr={setPageNr}
          filtersMenu={filtersMenu}
          loading={loading}
          pageNr={pageNr}
          challengesToRender={challengesToRender}
        />
      </Media>
    </>
  );
};

export default Challenges;
