const getPerumtation = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPerumtation(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });
  return results;
};
