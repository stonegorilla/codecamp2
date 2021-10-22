// 3개의 값 곱하기

const MaxThree = function (array) {
  const getPerumtation = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPerumtation(rest, selectNumber - 1);
      const attached = permutations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });
    return results;
  };

  multiplyresult = getPerumtation(array, 3).map(
    (data) => data[0] * data[1] * data[2]
  );

  return Math.max(...multiplyresult);
};

console.log(MaxThree([8, 7, 6, 5, 4, 3, 2, 1]));
