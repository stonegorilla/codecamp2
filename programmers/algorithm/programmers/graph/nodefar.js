// function solution(n, edge) {
//   var answer = 0;
//   let computers = new Array(n);
//   for (var i = 0; i < computers.length; i++) {
//     computers[i] = new Array(n).fill(0);
//     computers[i][i] = 1;
//   }

//   for (let i = 0; i < edge.length; i++) {
//     computers[edge[i][0] - 1][edge[i][1] - 1] = 1;
//     computers[edge[i][1] - 1][edge[i][0] - 1] = 1;
//   }
//   function aaa(n, computers) {
//     var len = 0;
//     let array = new Array(n).fill(Infinity);

//     let memory = [];
//     array[0] = 0;
//     memory.push(0);

//     for (let i = 0; i < memory.length; i++) {
//       for (let j = 0; j < computers.length; j++) {
//         if (
//           computers[memory[i]][j] === 1 &&
//           memory[i] !== j &&
//           array[j] === Infinity
//         ) {
//           array[j] = array[memory[i]] + 1;
//           memory.push(j);
//         }
//       }
//     }
//     let max = Math.max(...array);
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === max) len++;
//     }
//     console.log(len);
//     return len;
//   }
//   answer = aaa(n, computers);
//   return answer;
// }

// solution(6, [
//   [3, 6],
//   [4, 3],
//   [3, 2],
//   [1, 3],
//   [1, 2],
//   [2, 4],
//   [5, 2],
// ]);

// aaa(6, [
//   [1, 1, 1, 0, 0, 0],
//   [1, 1, 1, 1, 1, 0],
//   [1, 1, 1, 1, 0, 1],
//   [0, 1, 1, 1, 0, 0],
//   [0, 1, 0, 0, 1, 0],
//   [0, 0, 1, 0, 0, 1],
// ]);

function solution2(n, edge) {
  let answer = 0;

  let array = new Array(n).fill(Infinity);
  let memory = [];
  array[0] = 0;
  memory.push(1);
  for (let i = 0; i < memory.length; i++) {
    for (let j = 0; j < edge.length; j++) {
      if (edge[j][0] === memory[i] && array[edge[j][1] - 1] === Infinity) {
        memory.push(edge[j][1]);
        array[edge[j][1] - 1] = array[memory[i] - 1] + 1;
      }
      if (edge[j][1] === memory[i] && array[edge[j][0] - 1] === Infinity) {
        memory.push(edge[j][0]);
        array[edge[j][0] - 1] = array[memory[i] - 1] + 1;
      }
    }
  }

  let max = Math.max(...array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === max) answer++;
  }

  return answer;
}

solution2(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
