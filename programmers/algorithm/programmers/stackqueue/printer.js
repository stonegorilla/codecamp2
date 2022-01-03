function solution(priorities, location) {
  var answer = 0;
  var i = 0;
  var max = Math.max(...priorities);
  i = priorities.indexOf(max);
  console.log(i);
  while (max !== 0) {
    i !== priorities.length - 1 ? i++ : i--;
    max--;
  }
  return answer;
}

solution([2, 1, 3, 2], 2);
solution([1, 1, 9, 1, 1, 1], 0);
