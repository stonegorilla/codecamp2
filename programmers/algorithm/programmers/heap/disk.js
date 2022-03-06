function solution(jobs) {
  let answer = 0;
  let queue = [];
  let t = 0;
  jobs = jobs.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < jobs.length; i++) {
    queue.push(jobs[0]);

    while (queue.length !== 0) {
      t = t + queue[0];
      while (jobs[0][0] <= t) {
        queue.push(jobs[j]);
        jobs = jobs.slice(1);
      }
    }
  }
  return answer;
}

solution([
  [0, 3],
  [1, 9],
  [2, 6],
]);
