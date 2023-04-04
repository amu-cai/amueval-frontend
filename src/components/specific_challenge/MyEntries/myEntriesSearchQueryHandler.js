const myEntriesSearchQueryHandler = (
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
      const { id, when } = entry;
      let evaluations = '';
      if (entry.evaluations) {
        for (let evaluation of Object.values(entry.evaluations)) {
          evaluations += ` ${evaluation}`;
        }
      }
      const str = `${id} ${when.slice(11, 16)} ${when.slice(
        0,
        10
      )} ${evaluations}`;
      console.log(entry);
      console.log(str);
      if (str.toLowerCase().includes(searchQuery.toLowerCase()))
        submissionsToRender.push(entry);
    }
    setEntries(submissionsToRender);
  }
};

export default myEntriesSearchQueryHandler;
