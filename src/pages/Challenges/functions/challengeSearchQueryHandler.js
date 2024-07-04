const challengeSearchQueryHandler = (
  event,
  allChallenges,
  setChallenges,
  setPageNr
) => {
  let searchQuery = event.target.value;
  let challengesToRender = [];
  setPageNr(1);
  if (searchQuery === '') setChallenges(allChallenges);
  else {
    for (let challenge of allChallenges) {
      const {
        title,
        description,
        type,
        mainMetric,
        bestScore,
        deadline,
        baseline,
        award,
      } = challenge;
      const str = `${title} ${description} ${type} ${mainMetric} ${bestScore}
            ${deadline ? deadline.slice(11, 16) : ''} ${
        deadline ? deadline.slice(0, 10) : ''
      } ${baseline} ${award}`;
      if (str.toLowerCase().includes(searchQuery.toLowerCase()))
        challengesToRender.push(challenge);
    }
    setChallenges(challengesToRender);
  }
};

export default challengeSearchQueryHandler;
