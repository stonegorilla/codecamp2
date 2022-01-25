function solution(n, computers) {
  var answer = 0;
  let array = new Array(n).fill(false);
  while (array.every(false)) {
    console.log("aaa");
  }
  return answer;
}

solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);

solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);
