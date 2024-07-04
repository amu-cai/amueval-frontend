const filtersHandler = (
    filters = {
        types: [],
        metrics: [],
        searchPhrase: '',
        sortByParticipants: false,
        sortByDeadline: false
    },
    allChallenges,
    setChallenges,
    setPageNr
) => {
    let filteredChallenges = allChallenges;
    if (filters.types.length) {
        filteredChallenges = filteredChallenges.filter(challenge => {
            return filters.types.includes(challenge.type);
        });
    }
    if (filters.metrics.length) {
        filteredChallenges = filteredChallenges.filter(challenge => {
            return filters.metrics.includes(challenge.mainMetric);
        });
    }
    if (filters.searchPhrase) {
        filteredChallenges = filteredChallenges.filter(challenge => {
            return challenge.title.toLowerCase().includes(filters.searchPhrase.toLowerCase());
        });
    }
    setChallenges(filteredChallenges);
    setPageNr(1);
};

export default filtersHandler;
