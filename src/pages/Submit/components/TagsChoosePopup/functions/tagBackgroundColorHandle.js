const tagBackgroundColorHandle = (theme, index) => {
  if (index % 2 === 0) return theme.colors.white;
  return theme.colors.dark01;
};

export default tagBackgroundColorHandle;
