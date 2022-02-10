function solution(arrows) {
  let answer = 0;
  let vertex = [[0, 0]];
  let line = [];
  let memory = [0, 0];
  let mechanism = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  function symmetry(number) {
    if (number === 0) return 4;
    else if (number === 1) return 5;
    else if (number === 2) return 6;
    else if (number === 3) return 7;
    else if (number === 4) return 0;
    else if (number === 5) return 1;
    else if (number === 6) return 2;
    else if (number === 7) return 3;
    else return -1;
  }
  for (let i = 0; i < arrows.length; i++) {
    vertex.push([
      memory[0] + mechanism[arrows[i]][0],
      memory[1] + mechanism[arrows[i]][1],
    ]);

    vertex.push([
      memory[0] + 2 * mechanism[arrows[i]][0],
      memory[1] + 2 * mechanism[arrows[i]][1],
    ]);
    memory = [vertex[vertex.length - 1][0], vertex[vertex.length - 1][1]];
  }

  // 여기까지가 점들 변환

  for (let i = 0; i < arrows.length; i++) {
    line.push([arrows[i], ...vertex[i]]);
  }

  vertex = vertex.filter((val, idx) => {
    return vertex.indexOf(val) === idx;
  });
  console.log(vertex);
  return answer;
}

solution([6, 6, 6, 4, 4, 4, 2, 2, 2, 0, 0, 0, 1, 6, 5, 5, 3, 6, 0]);
