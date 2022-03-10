// function solution1(n, times) {
//   var answer = 0;
//   let start = 1;
//   let end = 2;
//   while (true) {
//     let sum = 0;
//     let rem = [];
//     for (let j = 0; j < times.length; j++) {
//       sum += Math.floor(end / times[j]);
//       rem.push(end % times[j]);
//     }

//     if (sum > n) {

//     } else if (sum === n) {
//       return i - Math.min(rem);
//     } else {
//       start = 2 * start;
//       end = 2 * end;
//     }
//   }
//   return answer;
// }

function solution2(n, times) {
  let answer = 0;
  let start = 0;
  let end = Math.ceil((Math.max(...times) * n) / times.length);
  let findmin = false;
  let i = 0;
  while (i < 100) {
    let mid = Math.ceil((end + start) / 2);
    let sum = 0;
    for (let j = 0; j < times.length; j++) {
      sum += Math.floor(mid / times[j]);
    }

    if (!findmin) {
      if (n > sum) start = mid;
      else if (n < sum && end - start === 1) return end;
      else if (n < sum) end = mid;
      else {
        end = mid;
        findmin = true;
      }
    } else {
      if (end - start === 1) return end;
      else if (n === sum) end = mid;
      else start = mid;
    }

    i++;
  }
}

// solution2(6, [7, 10]);
solution2(10, [6, 8, 10]);
