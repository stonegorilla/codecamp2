function solution(x) {
  let answer = [];
  let sum = 0;
  let num = x;

  while (x !== 0) {
    answer.push(x % 10);
    x = parseInt(x / 10);
  }

  return answer;
}

function solution1(arr, divisor) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) answer.push(arr[i]);
  }
  if (answer.length === 0) answer.push(-1);

  answer.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });

  return answer;
}

console.log(solution(123));
console.log(solution1([5, 9, 7, 10], 5));
