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
let start = new Date().getTime();
console.log(solution([1, 3, 2, 5, 4], 15));
let end = new Date().getTime();

console.log(start, end);
