function solution(nodeweight) {
  nodeweight = nodeweight.sort((a, b) => a[2] - b[2]);
  console.log(nodeweight);
}

solution([
  [1, 2, 1],
  [2, 3, 6],
  [2, 4, 2],
  [1, 5, 3],
  [4, 5, 5],
  [3, 5, 4],
]);
