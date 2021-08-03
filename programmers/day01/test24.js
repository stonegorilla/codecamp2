function solution(n) {
  let answer = 0;
  let sosu;
  let arr = [];
  for (let i = 2; i <= n; i++) {
    sosu = true;
    for (let j = 0; j < arr.length && arr[j] * arr[j] <= i; j++) {
      if (i % arr[j] === 0) {
        sosu = false;
        break;
      }
    }
    if (sosu === true) {
      answer += 1;
      arr.push(i);
    }
  }
  return answer;
}
