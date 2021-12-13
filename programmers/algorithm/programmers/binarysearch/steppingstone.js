function solution(distance, rocks, n) {
  var answer = 0;
  rocks.sort((a, b) => {
    return a - b;
  });
  console.log(rocks);
  return answer;
}

solution(25, [2, 14, 11, 21, 17], 2);
