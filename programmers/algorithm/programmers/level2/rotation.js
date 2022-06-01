function solution(rows, columns, queries) {
  var answer = [];
  let array = [];
  let num = 1;
  for (let i = 0; i < rows; i++) {
    let memory = [];
    for (let j = 0; j < columns; j++) {
      memory.push(num);
      num++;
    }
    array.push(memory);
  }

  for (let i = 0; i < queries.length; i++) {
    let start = [queries[i][0] - 1, queries[i][1] - 1];

    let point = [queries[i][0] - 1, queries[i][1] - 1];
    let loop = 1;
    let minnum = Infinity;
    while (loop !== 5) {
      let temp = array[point[0]][point[1]];

      array[point[0]][point[1]] = array[start[0]][start[1]];
      array[start[0]][start[1]] = temp;
      if (minnum > temp) minnum = temp;

      if (loop === 1) {
        point[1]++;
        if (point[1] === queries[i][3] - 1) loop++;
      } else if (loop === 2) {
        point[0]++;
        if (point[0] === queries[i][2] - 1) loop++;
      } else if (loop === 3) {
        point[1]--;
        if (point[1] === queries[i][1] - 1) loop++;
      } else {
        point[0]--;
        if (point[0] === queries[i][0] - 1) loop++;
      }
    }
    answer.push(minnum);
  }

  return answer;
}

solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]);
