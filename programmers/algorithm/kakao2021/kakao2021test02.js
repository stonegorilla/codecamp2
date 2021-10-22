function solution(orders, course) {
  let answer = [];
  orders.forEach((data) => {
    answer.push(...data);
  });
  let uniqueArr = answer.filter((data, index) => {
    return answer.indexOf(data) === index;
  });

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

  combinations = getCombinations(uniqueArr, 4);
  console.log(combinations);
  return answer;
}

solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]);
