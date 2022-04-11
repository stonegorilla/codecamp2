function solution(arr) {
  const INF = Infinity;
  let isVisit = new Array(arr.length).fill(false);

  let distance = arr[0];
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    let memory = new Array(arr.length).fill(INF);
    isVisit[start] = true;
  }
}

solution([
  [0, 2, 5, 1, INF, INF],
  [2, 0, 3, 2, INF, INF],
  [5, 3, 0, 3, 1, 5],
  [1, 2, 3, 0, 1, INF],
  [INF, INF, 1, 1, 0, 2],
  [INF, INF, 5, INF, 2, 0],
]);
