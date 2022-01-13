function solution(arr) {
  var answer = 0;
  let lcm = false;
  while (!lcm) {
    answer++;
    for (let i = 0; i < arr.length; i++) {
      if (answer % arr[i] !== 0) break;

      if (i === arr.length - 1) lcm = true;
    }
  }
  return answer;
}

console.log(solution([2, 6, 8, 14]));
