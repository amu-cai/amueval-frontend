const tagColorHandle = (theme, index, tag, tags) => {
  if (tags.includes(tag.name)) return theme.colors.green;
  if (index % 2 === 0) return theme.colors.dark01;
  return theme.colors.white;
};

export default tagColorHandle;
