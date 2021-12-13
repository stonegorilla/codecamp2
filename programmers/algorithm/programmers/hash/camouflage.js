function solution(clothes) {
  let answer = 1;

  const arr = clothes.map((data) => data[1]);
  console.log(arr);
  const result = arr.reduce((accu, curr) => {
    accu[curr] = (accu[curr] || 0) + 1;
    return accu;
  }, {});
  console.log(result);
  let result_values = Object.values(result);
  console.log(result_values);
  result_values.forEach((data) => (answer = answer * (data + 1)));
  answer = answer - 1;
  console.log(answer);
  return answer;
}

solution([
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
