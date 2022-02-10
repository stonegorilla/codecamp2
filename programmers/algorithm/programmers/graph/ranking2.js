function solution(n, results) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (winnumbers(i, results) + losenumbers(i, results) === n - 1) answer++;
  }
  console.log(answer);
  return answer;
}

function winnumbers(nth, edge) {
  let memory = [];
  memory.push(nth);

  for (let i = 0; i < memory.length; i++) {
    for (let j = 0; j < edge.length; j++) {
      if (edge[j][0] === memory[i] && !memory.includes(edge[j][1])) {
        memory.push(edge[j][1]);
      }
    }
  }

  return memory.length - 1;
}

function losenumbers(nth, edge) {
  let memory = [];
  memory.push(nth);

  for (let i = 0; i < memory.length; i++) {
    for (let j = 0; j < edge.length; j++) {
      if (edge[j][1] === memory[i] && !memory.includes(edge[j][0])) {
        memory.push(edge[j][0]);
      }
    }
  }
  return memory.length - 1;
}

solution(5, [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
]);

solution(3, [
  [3, 1],
  [3, 2],
  [1, 2],
]);

solution(4, [
  [1, 2],
  [2, 3],
  [1, 4],
]);
