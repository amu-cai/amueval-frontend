const searchQueryHandler = (event, entriesAll, setPageNr, setEntries) => {
  let searchQuery = event.target.value;
  let submissionsToRender = [];
  setPageNr(1);
  if (searchQuery === '') setEntries(entriesAll);
  else {
    for (let entry of entriesAll) {
      let { when, tags } = entry;
      tags = Object.values(tags)
        .map((tag) => tag.name)
        .join(' ');
      const otherKeys = Object.values(entry)
        .join(' ')
        .replaceAll(-999999999, 'N/A')
        .replaceAll('[object Object]', '')
        .replaceAll(',', '');
      const str = `${when.slice(11, 16)} ${when.slice(
        0,
        10
      )} ${otherKeys} ${tags}`;
      if (str.toLowerCase().includes(searchQuery.toLowerCase()))
        submissionsToRender.push(entry);
    }
    setEntries(submissionsToRender);
  }
};

export default searchQueryHandler;
