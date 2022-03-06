function solution(jobs) {
  let answer = 0;
  let queue = [];
  let t = 0;
  jobs = jobs.sort((a, b) => a[0] - b[0]);
  for(let i=0; i<jobs.length; i++){
    queue.push(jobs[i])
    for(let j=0; j<queue.length; j++){
      while()
    }
  }
  return answer;
}

solution([
  [0, 3],
  [1, 9],
  [2, 6],
]);
