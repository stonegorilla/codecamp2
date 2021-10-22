function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
    // 내적 공식 (뭐 이건 공대에서 많이 쓰일 듯?)
  }
  return answer;
}
