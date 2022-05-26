function solution(matrix_sizes) {
  const n = matrix_sizes.length;
  const dp = new Array(n).fill().map((_) => new Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    dp[i][i] = 0;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      for (let k = 0; k < i; k++) {
        dp[j][j + i] = Math.min(
          dp[j][j + i],
          dp[j][j + k] +
            dp[j + k + 1][j + i] +
            matrix_sizes[j][0] *
              matrix_sizes[j + k + 1][0] *
              matrix_sizes[j + i][1]
        );
      }
    }
  }

  return dp[0][n - 1];
}

solution([
  [5, 3],
  [3, 10],
  [10, 6],
]);

solution([
  [10, 4],
  [4, 6],
  [6, 7],
  [7, 3],
  [3, 12],
]);
