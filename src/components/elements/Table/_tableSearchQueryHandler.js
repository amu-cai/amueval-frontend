const _tableSearchQueryHandler = (event, entriesFromApi, setPageNr, setEntries) => {
    let searchQuery = event.target.value;
    let submissionsToRender = [];
    setPageNr(1);
    if (searchQuery === '')
        setEntries(entriesFromApi);
    else {
        for (let entry of entriesFromApi) {
            const {submitter, when, evaluations, times} = entry;
            const str = `${submitter} ${when.slice(11, 16)} ${when.slice(0, 10)} ${evaluations} ${times}`;
            if (str.toLowerCase().includes(searchQuery.toLowerCase()))
                submissionsToRender.push(entry);
        }
        setEntries(submissionsToRender);
    }
};

export default _tableSearchQueryHandler;