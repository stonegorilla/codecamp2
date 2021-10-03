function solution(n) {
  let arr = [];
  let answer = 0;
  let x = n;
  while (x !== 0) {
    arr.push(x % 3);
    x = parseInt(x / 3);
  }
  let arrlength = arr.length - 1;

  arr.forEach((item) => {
    answer += item * Math.pow(3, arrlength);
    arrlength -= 1;
  });
  return answer;
}

console.log(solution(125));

// 이 문제는 숫자 갈라놓기 방식을 쓰면 됨
