const getCombinations = function (arr, selectNumber) {
  const result = [];

  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });

  return result;
};

getCombinations([1, 2, 3, 4, 5, 6, 7], 7);
