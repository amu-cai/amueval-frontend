const leaderboardSearchQueryHandler = (event, entriesFromApi, setPageNr, setEntries) => {
    let searchQuery = event.target.value;
    let submissionsToRender = [];
    setPageNr(1);
    if (searchQuery === '')
        setEntries(entriesFromApi);
    else {
        for (let entry of entriesFromApi) {
            const {id, submitter, when, times} = entry;
            let evaluations = '';
            for (let evaluation of entry.evaluations) {
                evaluations += ` ${evaluation.score}`;
            }
            const str = `${id} ${submitter} ${when.slice(11, 16)} ${when.slice(0, 10)} ${evaluations} ${times}`;
            if (str.toLowerCase().includes(searchQuery.toLowerCase()))
                submissionsToRender.push(entry);
        }
        setEntries(submissionsToRender);
    }
};

export default leaderboardSearchQueryHandler;