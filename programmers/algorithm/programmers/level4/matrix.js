function solution(matrix_sizes) {
  var answer = 0;
  let array = [matrix_sizes[0][0]];
  let medium = [];
  for (let i = 0; i < matrix_sizes.length - 1; i++) {
    array.push(matrix_sizes[i][1]);
    medium.push(matrix_sizes[i][1]);
  }
  array.push(matrix_sizes[matrix_sizes.length - 1][1]);

  while (medium.length !== 0) {
    let max = Math.max(...medium);
  }

  return answer;
}

solution([
  [5, 3],
  [3, 10],
  [10, 6],
]);
