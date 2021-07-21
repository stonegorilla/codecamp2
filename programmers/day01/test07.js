function solution(s) {
  let pnum = 0;
  let ynum = 0;
  let answer;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      pnum += 1;
    } else if (s[i] === "y" || s[i] === "Y") {
      ynum += 1;
    } else {
    }
  }
  if (pnum === ynum) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

// console.log(solution("pPoooyY"));
// console.log(solution("Pyy"));

function solution1(num) {
  let answer = 0;

  for (let i = 0; num !== 1 && answer < 500; i++) {
    if (num % 2 === 0) {
      num /= 2;
      answer += 1;
    } else {
      num = 3 * num + 1;
      answer += 1;
    }
  }
  //   if (answer >= 500) answer = -1;
  return answer;
}

console.log(solution1(6));
console.log(solution1(16));
console.log(solution1(626331));

// recursion 함수 사용 가능 (함수내 함수 선언? )
