const filtersHandler = (
    filters = {
        types: [],
        metrics: [],
        searchPhrase: '',
        sortByParticipants: null,
        sortByDeadline: null
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
            return filters.metrics.includes(challenge.main_metric);
        });
    }

    if (filters.searchPhrase) {
        filteredChallenges = filteredChallenges.filter(challenge => {
            return challenge.title.toLowerCase().includes(filters.searchPhrase.toLowerCase());
        });
    }

    if (filters.sortByParticipants) {
        filteredChallenges.sort((a, b) => {
            return filters.sortByParticipants === 'asc'
                ? a.participants - b.participants
                : b.participants - a.participants;
        });
    }

    if (filters.sortByDeadline) {
        filteredChallenges.sort((a, b) => {
            const deadlineA = new Date(a.deadline);
            const deadlineB = new Date(b.deadline);
            return filters.sortByDeadline === 'asc'
                ? deadlineA - deadlineB
                : deadlineB - deadlineA;
        });
    }

    setChallenges([...filteredChallenges]);

    setPageNr(1);
};

export default filtersHandler;
