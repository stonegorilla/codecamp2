function solution(number) {
  if (number === 1 || number === 0) return 1;
  return solution(number - 1) + solution(number - 2);
}

console.log(solution(40));
