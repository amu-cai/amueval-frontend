const orderKeys = (elem) => {
  if (elem) {
    let result = ['id', 'submitter', 'description'];
    const elemKeys = Object.keys(elem);
    const dev0keys = elemKeys
      .filter((key) => key.split('.')[1] === 'dev-0')
      .sort();
    const dev1keys = elemKeys
      .filter((key) => key.split('.')[1] === 'dev-1')
      .sort();
    const testAkeys = elemKeys
      .filter((key) => key.split('.')[1] === 'test-A')
      .sort();
    const testBkeys = elemKeys
      .filter((key) => key.split('.')[1] === 'test-B')
      .sort();
    result = result.concat(dev0keys);
    result = result.concat(dev1keys);
    result = result.concat(testAkeys);
    result = result.concat(testBkeys);
    result.push('when');
    return result;
  }
  return null;
};

export default orderKeys;
