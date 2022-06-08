function solution(orders, course) {
  var answer = [];
  orders = orders.map((data) =>
    data
      .split("")
      .sort((a, b) => (a > b) - (b > a))
      .join("")
  );

  for (let i of course) {
    let coursesum = [];
    for (let j = 0; j < orders.length; j++) {
      coursesum = [...coursesum, ...getCombinations(orders[j].split(""), i)];
    }

    coursesum = coursesum.map((data) => data.join(""));

    answer = [...answer, ...getMode(coursesum)];
  }
  console.log(answer);
  return answer;
}

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

const getMode = function (array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    !obj[array[i]] ? (obj[array[i]] = 1) : obj[array[i]]++;
  }
  let max = Math.max(...Object.values(obj));
  if (max === 1) return [];
  let answer = Object.keys(obj).filter((data) => obj[data] === max);
  return answer;
};

solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]);
solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]);
solution(["XYZ", "XWY", "WXA"], [2, 3, 4]);

console.log(getMode(["a", "b", "c", "d", "a", "b", "b"]));
