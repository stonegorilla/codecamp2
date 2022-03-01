function solution(n, costs) {
  let answer = 0;
  costs = costs.sort((a, b) => a[2] - b[2]);
  console.log(costs);
  let memory = new Array(n).fill(-1);
  let newnumber = 0;
  for (let i = 0; i < costs.length; i++) {
    if (memory[costs[i][0]] === -1 && memory[costs[i][1]] === -1) {
      memory[costs[i][0]] = newnumber;
      memory[costs[i][1]] = newnumber;
      newnumber++;
      answer += costs[i][2];
    } else if (memory[costs[i][0]] !== -1 && memory[costs[i][1]] === -1) {
      memory[costs[i][1]] = memory[costs[i][0]];
      answer += costs[i][2];
    } else if (memory[costs[i][0]] === -1 && memory[costs[i][1]] !== -1) {
      memory[costs[i][0]] = memory[costs[i][1]];
      answer += costs[i][2];
    } else if (memory[costs[i][0]] !== memory[costs[i][1]]) {
      let temp = memory[costs[i][1]];
      for (let j = 0; j < memory.length; j++) {
        if (memory[j] === temp) {
          memory[j] = memory[costs[i][0]];
        }
      }
      answer += costs[i][2];
    } else {
    }
  }

  return answer;
}

solution(4, [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
]);

solution(5, [
  [0, 1, 5],
  [1, 2, 3],
  [2, 3, 3],
  [3, 1, 2],
  [3, 0, 4],
  [2, 4, 6],
  [4, 0, 7],
]);

solution(5, [
  [0, 1, 1],
  [2, 3, 1],
  [3, 4, 2],
  [1, 2, 2],
  [0, 4, 100],
]);
