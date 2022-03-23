// function solution(strs, t) {
//   console.log(wordpuzzle(strs, t) !== 0 ? wordpuzzle(strs, t) : -1);
//   return wordpuzzle(strs, t) !== 0 ? wordpuzzle(strs, t) : -1;
// }

// function wordpuzzle(strs, t, pp) {
//   let answer = 0;

//   for (let i = 0; i < strs.length; i++) {
//     for (let j = 0; j < strs[i].length; j++) {
//       if (t[j] !== strs[i][j]) break;

//       if (j === strs[i].length - 1) {
//         if (t.length - 1 > j) {
//           console.log(t.slice(j + 1));
//           answer =
//             answer +
//             wordpuzzle(
//               strs.filter((_, idx) => i <= idx),
//               t.slice(j + 1)
//             );
//         } else if (t.length - 1 === j) answer += 1;
//         else answer += 0;
//       }
//     }
//   }
//   return answer;
// }

// function solution(strs, t) {
//   return wordpuzzle(strs, t, 0) !== Infinity ? wordpuzzle(strs, t, 0) : -1;
// }

// function wordpuzzle(strs, t, puzzle) {
//   if (strs.includes(t)) {
//     puzzle++;
//     return puzzle;
//   }
//   let array = [];
//   for (let i = 0; i < t.length - 1; i++) {
//     if (strs.includes(t.slice(0, i + 1))) {
//       array.push(wordpuzzle(strs, t.slice(i + 1), puzzle + 1));
//     }
//   }

//   return array.length !== 0 ? Math.min(...array) : Infinity;
// }

function solution(strs, t) {
  let memory = [0];
  let memoryindex = [0];
  for (let i = 1; i <= t.length; i++) {
    let value = 20000;
    for (let j = memory.length - 1; j >= 0 && i - memoryindex[j] < 6; j--) {
      if (strs.includes(t.slice(memoryindex[j], i))) {
        value = Math.min(value, memory[j] + 1);
      }
    }
    if (value !== 20000) {
      memoryindex.push(i);
      memory.push(value);
    }
  }

  if (memoryindex[memoryindex.length - 1] === t.length)
    return memory[memory.length - 1];
  else return -1;
}

solution(["ba", "na", "n", "a"], "banana");
solution(["gdds", "a"], "gddst");
solution(["aaas", "t"], "aaast");
solution(["a", "b"], "cd");
solution(["a", "b", "c", "d", "bcde"], "abcde");
solution(["app", "ap", "p", "l", "e", "ple", "pp"], "apple");

// solution(["app", "ap", "p", "l", "e", "ple", "pp"], "apple");
// solution(["ba", "an", "nan", "ban", "n"], "banana");
// solution(["ab", "na", "n", "a", "bn"], "nabnabn");
