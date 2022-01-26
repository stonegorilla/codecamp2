function solution(n, computers) {
  var answer = 0;
  let array = new Array(n).fill(false);

  while (!array.every((data) => data)) {
    let ancestor = array.indexOf(false);

    let memory = [];
    array[ancestor] = true;
    memory.push(ancestor);

    answer++;

    for (let i = 0; i < memory.length; i++) {
      console.log(memory);
      for (let j = 0; j < computers.length; j++) {
        if (
          computers[memory[i]][j] === 1 &&
          memory[i] !== j &&
          array[j] === false
        ) {
          array[j] = true;
          memory.push(j);
        }
      }
    }
  }

  return answer;
}

solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);

solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);
