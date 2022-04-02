function solution(dist) {
  let answer = [];
  let from0 = [
    { index: 0, dis: 0 },
    { index: 1, dis: dist[0][1] },
  ];
  for (let i = 2; i < dist.length; i++) {
    if (dist[1][i] === Math.abs(dist[0][1] - dist[0][i])) {
      from0.push({ index: i, dis: dist[0][i] });
    } else {
      from0.push({ index: i, dis: -dist[0][i] });
    }
  }
  answer.push(from0.sort((a, b) => a.dis - b.dis).map((data) => data.index));
  answer.push(from0.sort((a, b) => b.dis - a.dis).map((data) => data.index));

  answer = answer.sort((a, b) => a[0] - b[0]);

  return answer;
}

solution([
  [0, 5, 2, 4, 1],
  [5, 0, 3, 9, 6],
  [2, 3, 0, 6, 3],
  [4, 9, 6, 0, 3],
  [1, 6, 3, 3, 0],
]);

solution([
  [0, 2, 3, 1],
  [2, 0, 1, 1],
  [3, 1, 0, 2],
  [1, 1, 2, 0],
]);
