import CHALLENGES_ACTION from './ChallengesActions';

const ChallengesReducer = (state, action) => {
  switch (action.type) {
    case CHALLENGES_ACTION.NEXT_PAGE:
      return { ...state, pageNr: state.pageNr + 1 };
    case CHALLENGES_ACTION.PREVIOUS_PAGE:
      return { ...state, pageNr: state.pageNr - 1 };
    case CHALLENGES_ACTION.SET_PAGE:
      return { ...state, pageNr: action.payload };
    case CHALLENGES_ACTION.LOAD_CHALLENGES_FROM_API:
      return {
        ...state,
        challengesFromAPI: action.payload,
        challenges: action.payload,
        challengesFiltered: action.payload,
        loading: !state.loading,
      };
    case CHALLENGES_ACTION.SET_CHALLENGES:
      return {
        ...state,
        challenges: action.payload,
      };
    case CHALLENGES_ACTION.SET_CHALLENGES_FILTERED:
      return {
        ...state,
        challengesFiltered: action.payload,
      };
    case CHALLENGES_ACTION.TOGGLE_FILTERS_MENU:
      return { ...state, filtersMenu: !state.filtersMenu };
    case CHALLENGES_ACTION.TOGGLE_LOADING:
      return { ...state, loading: !state.loading };
    case CHALLENGES_ACTION.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case CHALLENGES_ACTION.SET_STATUS_FILTER:
      return {
        ...state,
        statusFilter: action.payload,
      };
    case CHALLENGES_ACTION.SET_CHALLENGE_TYPE_FILTER:
      return {
        ...state,
        challengeTypeFilter: action.payload,
      };
    case CHALLENGES_ACTION.SET_COMMERCIAL_FILTER:
      return {
        ...state,
        commercialFilter: action.payload,
      };
    default:
      throw new Error('Undefined action in ChallengesReducer!');
  }
};

export default ChallengesReducer;
