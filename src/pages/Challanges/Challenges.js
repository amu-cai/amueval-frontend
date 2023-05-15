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
import ChallengesReducer from './model/ChallengesReducer';
import CHALLENGES_ACTION from './model/ChallengesActions';

const Challenges = () => {
  const [state, dispatch] = React.useReducer(ChallengesReducer, {
    pageNr: 1,
    challengesFromAPI: [],
    challenges: [],
    challengesFiltered: [],
    filtersMenu: false,
    sortBy: 0,
    statusFilter: CHALLENGES_STATUS_FILTER.BOTH,
    challengeTypeFilter: 0,
    commercialFilter: 0,
    loading: true,
  });

  React.useMemo(() => {
    getChallenges(dispatch);
  }, []);

  React.useMemo(() => {
    statusFilterHandle(state.statusFilter, state.challenges, dispatch);
  }, [state.statusFilter, state.challenges]);

  const setPage = React.useCallback((value) => {
    dispatch({ type: CHALLENGES_ACTION.SET_PAGE, payload: value });
  }, []);

  const searchQueryHandler = React.useCallback(
    (event) =>
      challengeSearchQueryHandler(event, state.challengesFromAPI, dispatch),
    [state.challengesFromAPI]
  );

  const filtersMenuRender = React.useCallback(
    (translateX = '0', opacity = '1', transBackDisplay = 'none') => {
      return (
        <FiltersMenu
          dispatch={dispatch}
          sortBy={state.sortBy}
          status={state.statusFilter}
          challengeTypeFilter={state.challengeTypeFilter}
          commercialFilter={state.commercialFilter}
          translateX={translateX}
          opacity={opacity}
          transBackDisplay={transBackDisplay}
        />
      );
    },
    [
      state.sortBy,
      state.statusFilter,
      state.challengeTypeFilter,
      state.commercialFilter,
    ]
  );

  return (
    <>
      <Media query={theme.mobile}>
        <ChallengesMobile
          dispatch={dispatch}
          filtersMenuRender={filtersMenuRender}
          searchQueryHandler={searchQueryHandler}
          setPage={setPage}
          filtersMenu={state.filtersMenu}
          loading={state.loading}
          pageNr={state.pageNr}
          challengesFiltered={state.challengesFiltered}
        />
      </Media>
      <Media query={theme.desktop}>
        <ChallengesDesktop
          dispatch={dispatch}
          filtersMenuRender={filtersMenuRender}
          searchQueryHandler={searchQueryHandler}
          setPage={setPage}
          filtersMenu={state.filtersMenu}
          loading={state.loading}
          pageNr={state.pageNr}
          challengesFiltered={state.challengesFiltered}
        />
      </Media>
    </>
  );
};

export default Challenges;
