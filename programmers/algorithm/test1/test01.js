function solution(n, a, b) {
  var answer = 0;
  let s = Math.log2(n);
  bin1 = (a - 1).toString(2).padStart(s, "0");
  bin2 = (b - 1).toString(2).padStart(s, "0");

  for (let i = 0; i < n; i++) {
    if (bin1[i] !== bin2[i]) {
      answer = s - i;
      break;
    }
  }
  return answer;
}

console.log(solution(8, 4, 7));
