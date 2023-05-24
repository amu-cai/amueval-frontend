const tagsSearchQueryHandler = (event, tagsInit, tagsChoosed, setTags) => {
  let tagsToSearch = tagsInit;
  for (let tagChoosen of tagsChoosed)
    tagsToSearch = tagsToSearch.filter((tag) => tag.name !== tagChoosen.name);
  const searchQuery = event.target.value;
  let tagsToRender = [];
  if (searchQuery === '') {
    setTags(tagsToSearch);
  } else {
    for (let tag of tagsToSearch) {
      if (tag.name.toLowerCase().includes(searchQuery.toLowerCase()))
        tagsToRender.push(tag);
    }
    setTags(tagsToRender);
  }
};

export default tagsSearchQueryHandler;
