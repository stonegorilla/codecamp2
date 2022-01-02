function solution(citations) {
  let answer = 0;
  let min = Math.min(...citations);
  let max = Math.max(...citations);
  for (let i = 0; i <= max; i++) {
    let temp = citations.filter((data) => data >= i).length;
    if (temp >= i) answer = i;
  }

  return answer;
}

solution([1, 2, 2, 2, 5]);
