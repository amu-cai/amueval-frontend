const filterByTypeHandler = (
  event,
  allChallenges,
  setChallenges,
  setPageNr,
) => {
  setPageNr(1);
  if (event.length === 0) {
    setChallenges(allChallenges);
  }
  else {
    const filteredChallenges = allChallenges.filter(challenge =>
        event.includes(challenge.type)
    );
    setChallenges(filteredChallenges);
  }
};

export default filterByTypeHandler;
