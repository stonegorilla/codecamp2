function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  const dsorted = d.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < dsorted.length; i++) {
    sum += dsorted[i];
    if (sum > budget) {
      break;
    } else {
      answer = i + 1;
    }
  }
  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 10));
