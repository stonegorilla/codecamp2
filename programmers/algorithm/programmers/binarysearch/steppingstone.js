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

// function solution2(distance, rocks, n) {
//   if (rocks.length <= n) return distance;
//   let start = 1;
//   let end = distance;

//   rocks.push(0);
//   rocks.push(distance);
//   rocks = rocks.sort((a, b) => a - b);

//   while (true) {

//     let mid = Math.ceil((start + end) / 2);
//     let testrocks = [...rocks];
//     let testn = n;
//     let test = false;

//     if (end - start === 1) return start;

//     for (let i = 1; i < testrocks.length; i++) {
//       if (
//         testrocks[i] - testrocks[i - 1] < mid &&
//         testn !== 0 &&
//         i !== testrocks.length - 1
//       ) {
//         testrocks = [...testrocks.slice(0, i), ...testrocks.slice(i + 1)];
//         i--;
//         testn--;
//       } else if (testrocks[i] - testrocks[i - 1] < mid && testn === 0) {
//         test = true;
//         end = mid;
//         break;
//       } else {
//       }
//     }

//     if (!test) {
//       start = mid;
//     }
//   }
// }

// 이렇게 하면 일부 시간초과

function solution3(distance, rocks, n) {
  if (rocks.length <= n) return distance;
  let start = 1;
  let end = distance;
  let answer = 0;
  rocks.push(0);
  rocks.push(distance);
  rocks = rocks.sort((a, b) => a - b);

  while (start <= end) {
    let mid = Math.ceil((start + end) / 2);
    let testrocks = [...rocks];
    let count = 0;
    let now = 0;

    for (let i = 1; i < testrocks.length; i++) {
      if (testrocks[i] - now < mid) {
        count++;
      } else {
        now = testrocks[i];
      }
    }
    if (count > n) {
      end = mid - 1;
    } else {
      answer = Math.max(answer, mid);
      start = mid + 1;
    }
  }

  return answer;
}
solution3(25, [2, 14, 11, 21, 17], 2);
solution3(16, [4, 8, 11], 2);
