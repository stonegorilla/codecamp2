function solution(numbers) {
  var answer = [];
  var answer1 = [];
  var max = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  for (let i = 0; i < answer.length; i++) {
    if (max < answer[i]) max = answer[i];
  }
  for (let i = 0; i <= max; i++) {
    if (answer.includes(i)) {
      answer1.push(i);
    }
  }

  return answer1;
}

console.log(solution([2, 1, 3, 4, 1]));

function solution1(s) {
  let answer = [];
  let word = 0;
  for (let i = 0; i < s.length; i++) {
    word++;
    if (s[i] === " ") {
      word = 0;
    }
    if (word % 2 === 1) {
      answer.push(s[i].toUpperCase());
    } else {
      answer.push(s[i].toLowerCase());
    }
  }
  answer1 = answer.join("");
  return answer1;
}

console.log(solution1("hello World"));

// function solution2(numbers) {
//   let answer = [];

//   for (let i = 0; i < numbers.length; i = i + 1) {
//     for (let j = i + 1; j < numbers.length; j = j + 1) {
//       let sum = numbers[i] + numbers[j];

//       if (answer.indexOf(sum) === -1) {
//         answer.push(sum);
//       }
//     }
//   }
//   return answer.sort(function (a, b) {
//     return a - b;
//   });
// }

// function solution3(s) {
//   let answer = "";

//   let idx = 0;
//   for (let i = 0; i < s.length; i = i + 1) {
//     if (s[i] === " ") {
//       idx = 0;
//     } else {
//       answer = answer + (idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase);
//       idx = idx + 1;
//     }
//   }
//   return answer;
// }

// function solution4(s) {
//   const answer = s.split(" ").map((a) => {
//     a.split("")
//       .map((b, i) => {
//         return i % 2 === 0 ? b.toUpperCase() : b.toLowerCase();
//       })
//       .join("");
//   }).join(" ")
//   return answer;
// }

// console.log(solution4("hello world"));
