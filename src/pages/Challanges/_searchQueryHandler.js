const _searchQueryHandler = (event, challengesFromAPI, setPageNr, setChallenges) => {
    let searchQuery = event.target.value;
    let challengesToRender = [];
    setPageNr(1);
    if (searchQuery === '')
        setChallenges(challengesFromAPI);
    else {
        for (let challenge of challengesFromAPI) {
            let str = `${challenge.title} ${challenge.description} ${challenge.type} ${challenge.mainMetric} 
                ${challenge.bestScore} ${challenge.deadline} ${challenge.baseline} ${challenge.prize}`;
            if (str.toLowerCase().includes(searchQuery.toLowerCase()))
                challengesToRender.push(challenge);
        }
        setChallenges(challengesToRender);
    }
};

export default _searchQueryHandler;