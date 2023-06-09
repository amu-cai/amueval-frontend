const searchQueryHandler = (event, entriesAll, setPageNr, setEntries) => {
  let searchQuery = event.target.value;
  let submissionsToRender = [];
  setPageNr(1);
  if (searchQuery === '') setEntries(entriesAll);
  else {
    for (let entry of entriesAll) {
      const { when } = entry;
      const otherKeys = Object.values(entry).join(' ');
      const str = `${when.slice(11, 16)} ${when.slice(0, 10)} ${otherKeys}`;
      if (str.toLowerCase().includes(searchQuery.toLowerCase()))
        submissionsToRender.push(entry);
    }
    setEntries(submissionsToRender);
  }
};

export default searchQueryHandler;
