// function solution(distance, rocks, n) {
//   let answer = 0;
//   let array = [];
//   if (rocks.length < n) n = rocks.length;
//   rocks = rocks.sort((a, b) => a - b);
//   array.push(rocks[0]);
//   for (let i = 1; i < rocks.length; i++) {
//     array.push(rocks[i] - rocks[i - 1]);
//   }
//   array.push(distance - rocks[rocks.length - 1]);

//   for (let i = 0; i < n; i++) {
//     let t = array.indexOf(Math.min(...array));
//     if (!array[t - 1]) {
//       array[t + 1] = array[t] + array[t + 1];
//       array = array.slice(1);
//     } else if (!array[t + 1]) {
//       array[t - 1] = array[t] + array[t - 1];
//       array = array.slice(0, t - 1);
//     } else if (array[t - 1] <= array[t + 1]) {
//       array[t - 1] = array[t] + array[t - 1];
//       array = [...array.slice(0, t), ...array.slice(t + 1)];
//     } else {
//       array[t + 1] = array[t] + array[t + 1];
//       array = [...array.slice(0, t), ...array.slice(t + 1)];
//     }
//   }
//   answer = Math.min(...array);
//   console.log(answer);
//   return answer;
// }
// 이렇게 풀면 4,4,3,5 이라는 반례 있음

function solution2(distance, rocks, n) {
  let start = 1;
  let end = distance;
  while (true) {
    let mid = Math.ceil();
  }
}
solution2(25, [2, 14, 11, 21, 17], 2);
solution2(16, [4, 8, 11], 2);
