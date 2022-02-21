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

  for (let i = 0; i < vertex.length - 1; i++) {
    line.push([
      arrows[Math.floor(i / 2)] % 4,
      vertex[i][0] +
        Math.floor(arrows[Math.floor(i / 2)] / 4) *
          mechanism[arrows[Math.floor(i / 2)]][0],
      vertex[i][1] +
        Math.floor(arrows[Math.floor(i / 2)] / 4) *
          mechanism[arrows[Math.floor(i / 2)]][1],
    ]);
  }

  vertex = multiDU(vertex);

  line = multiDU(line);

  return 1 - vertex.length + line.length;
}

function multiDU(arr) {
  let uniques = [];
  let itemsFound = {};
  for (let i = 0; i < arr.length; i++) {
    let stringified = JSON.stringify(arr[i]);
    if (itemsFound[stringified]) {
      continue;
    }
    uniques.push(arr[i]);
    itemsFound[stringified] = true;
  }
  return uniques;
}
// solution([6, 6, 6, 4, 4, 4, 2, 2, 2, 0, 0, 0, 1, 6, 5, 5, 3, 6, 0]);
solution([6, 5, 2, 7, 1, 4, 2, 4, 6]);
