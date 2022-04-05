function solution(matrix_sizes) {
  const n = matrix_sizes.length;
  const dp = new Array(n).fill().map((_) => new Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    dp[i][i] = 0;
  }
  console.log(dp);
  for (let i = 1; i < n; i++) {
    for (let start = 0; start < n; start++) {
      const end = start + i;

      if (end >= n) break;

      for (let fixed = start; fixed < end; fixed++) {
        dp[start][end] = Math.min(
          dp[start][end],
          dp[start][fixed] +
            dp[fixed + 1][end] +
            matrix_sizes[start][0] *
              matrix_sizes[fixed + 1][0] *
              matrix_sizes[end][1]
        );
      }
    }
  }
  console.log(dp);
  return dp[0][n - 1];
}

solution([
  [5, 3],
  [3, 10],
  [10, 6],
]);
