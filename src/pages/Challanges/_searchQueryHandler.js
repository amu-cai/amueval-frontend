const _searchQueryHandler = (event, challengesFromAPI, setPageNr, setChallenges) => {
    let searchQuery = event.target.value;
    let challengesToRender = [];
    setPageNr(1);
    if (searchQuery === '')
        setChallenges(challengesFromAPI);
    else {
        for (let challenge of challengesFromAPI) {
            const {title, description, type, mainMetric, bestScore, deadline, baseline, prize} = challenge;
            const str = `${title} ${description} ${type} ${mainMetric} ${bestScore} 
            ${deadline.slice(11, 16)} ${deadline.slice(0, 10)} ${baseline} ${prize}`;
            if (str.toLowerCase().includes(searchQuery.toLowerCase()))
                challengesToRender.push(challenge);
        }
        setChallenges(challengesToRender);
    }
};

export default _searchQueryHandler;