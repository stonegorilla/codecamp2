function solution(x) {
  let answer = [];
  let sum = 0;
  let num = x;

  while (x !== 0) {
    answer.push(x % 10);
    x = parseInt(x / 10);
  }
  answer = answer.sort(function (a, b) {
    if (a > b) return -1;
    if (a === b) return 0;
    if (a < b) return 1;
  });

  answer = answer.join("");
  return Number(answer);
}
