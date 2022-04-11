function solution(nodeweight, n) {
  nodeweight = nodeweight.sort((a, b) => a[2] - b[2]);
  console.log(nodeweight);
  let memory = new Array(n).fill(-1);
  let group = 0;
  let answer = 0;
  for (let i = 0; i < nodeweight.length; i++) {
    // 2개다 memory에 포함 안되면 새로운 곳에 쳐 넣어
    // 1개 1개가 다른 곳에 연결 -> 합쳐
    // 1개만 들어가 있다. -> 그쪽에 합쳐
    // 2개다 같은 곳에 들어가 있다. -> 패스
    console.log(memory);
    if (memory[nodeweight[i][0]] === -1 && memory[nodeweight[i][1]] === -1) {
      memory[nodeweight[i][0]] = group;
      memory[nodeweight[i][1]] = group;
      group++;
      answer += nodeweight[i][2];
    } else if (memory[nodeweight[i][0]] === -1) {
      memory[nodeweight[i][0]] = memory[nodeweight[i][1]];
      answer += nodeweight[i][2];
    } else if (memory[nodeweight[i][1]] === -1) {
      memory[nodeweight[i][1]] = memory[nodeweight[i][0]];
      answer += nodeweight[i][2];
    } else if (memory[nodeweight[i][0]] !== memory[nodeweight[i][1]]) {
      for (let j = 0; j < memory.length; j++) {
        if (memory[j] === memory[nodeweight[i][1]]) {
          memory[j] = memory[nodeweight[i][0]];
        }
      }
      answer += nodeweight[i][2];
    } else {
    }
  }
  console.log(answer);
  return answer;
}

solution(
  [
    [0, 1, 1],
    [1, 2, 6],
    [1, 3, 2],
    [0, 4, 3],
    [3, 4, 5],
    [2, 4, 4],
  ],
  5
);
