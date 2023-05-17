const allEntriesSearchQueryHandler = (
  event,
  entriesFromApi,
  setPageNr,
  setEntries
) => {
  let searchQuery = event.target.value;
  let submissionsToRender = [];
  setPageNr(1);
  if (searchQuery === '') setEntries(entriesFromApi);
  else {
    for (let entry of entriesFromApi) {
      const { id, when, submitter } = entry;
      console.log(entry);
      let evaluations = '';
      if (entry.evaluations) {
        for (let evaluation of Object.values(entry.evaluations)) {
          evaluations += ` ${evaluation}`;
        }
      }
      const str = `${id} ${submitter} ${when.slice(11, 16)} ${when.slice(
        0,
        10
      )} ${evaluations}`;
      if (str.toLowerCase().includes(searchQuery.toLowerCase()))
        submissionsToRender.push(entry);
    }
    setEntries(submissionsToRender);
  }
};

export default allEntriesSearchQueryHandler;
