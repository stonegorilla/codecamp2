// 얘는 중첩 가능할때.....
function solution(n, edges, k, a, b) {
  let answer = 0;
  let arrays = [];
  for (let k = 0; k < n; k++) {
    let array = new Array(n).fill(Infinity);
    let memory = [];
    array[k] = 0;
    memory.push(k);
    for (let i = 0; i < memory.length; i++) {
      for (let j = 0; j < edges.length; j++) {
        if (edges[j][0] === memory[i] && array[edges[j][1]] === Infinity) {
          memory.push(edges[j][1]);
          array[edges[j][1]] = array[memory[i]] + 1;
        }
        if (edges[j][1] === memory[i] && array[edges[j][0]] === Infinity) {
          memory.push(edges[j][0]);
          array[edges[j][0]] = array[memory[i]] + 1;
        }
      }
    }
    arrays.push(array);
  }
  console.log(arrays);

  for (let i = 0; i < edges.length; i++) {
    if (k >= 1 + arrays[a][edges[i][0]] + arrays[edges[i][1]][b]) answer++;
    else if (k >= 1 + arrays[b][edges[i][0]] + arrays[edges[i][1]][a]) answer++;
    else {
    }
  }

  return answer - 2;
}

solution(
  8,
  [
    [0, 1],
    [1, 2],
    [2, 3],
    [4, 0],
    [5, 1],
    [6, 1],
    [7, 2],
    [7, 3],
    [4, 5],
    [5, 6],
    [6, 7],
  ],
  4,
  0,
  3
);
