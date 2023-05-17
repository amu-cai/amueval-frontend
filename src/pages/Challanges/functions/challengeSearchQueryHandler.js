import CHALLENGES_ACTION from '../model/ChallengesActions';

const challengeSearchQueryHandler = (event, challengesFromAPI, dispatch) => {
  let searchQuery = event.target.value;
  let challengesToRender = [];
  dispatch({ type: CHALLENGES_ACTION.SET_PAGE, payload: 1 });
  if (searchQuery === '')
    dispatch({
      type: CHALLENGES_ACTION.SET_CHALLENGES,
      payload: challengesFromAPI,
    });
  else {
    for (let challenge of challengesFromAPI) {
      const {
        title,
        description,
        type,
        mainMetric,
        bestScore,
        deadline,
        baseline,
        prize,
      } = challenge;
      const str = `${title} ${description} ${type} ${mainMetric} ${bestScore} 
            ${deadline ? deadline.slice(11, 16) : ''} ${
        deadline ? deadline.slice(0, 10) : ''
      } ${baseline} ${prize}`;
      if (str.toLowerCase().includes(searchQuery.toLowerCase()))
        challengesToRender.push(challenge);
    }
    dispatch({
      type: CHALLENGES_ACTION.SET_CHALLENGES,
      payload: challengesToRender,
    });
  }
};

export default challengeSearchQueryHandler;
