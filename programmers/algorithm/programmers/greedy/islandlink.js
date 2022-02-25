function solution(n, costs) {
  var answer = 0;
  costs = costs.sort((a, b) => a[2] - b[2]);
  console.log(costs);

  return answer;
}

solution(4, [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
]);
