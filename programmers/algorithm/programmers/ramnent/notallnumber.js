function solution(numbers) {
  var answer = 45;

  for (let i = 0; i < numbers.length; i++) {
    answer -= numbers[i];
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
