function solution(jobs) {
  let answer = 0;
  let queue = [];
  let t = 0;
  let total = jobs.length;
  jobs = jobs.sort((a, b) => a[0] - b[0]);

  while (jobs.length !== 0) {
    t = jobs[0][0];
    queue.push(jobs[0]);
    jobs = jobs.slice(1);

    while (jobs.length !== 0 && queue[queue.length - 1][0] === jobs[0][0]) {
      queue.push(jobs[0]);
      jobs = jobs.slice(1);
    }
    queue.sort((a, b) => a[1] - b[1]);
    while (queue.length !== 0) {
      t = t + queue[0][1];
      while (jobs.length !== 0 && jobs[0][0] <= t) {
        queue.push(jobs[0]);
        jobs = jobs.slice(1);
      }
      answer += t - queue[0][0];
      queue = queue.slice(1);
      queue.sort((a, b) => a[1] - b[1]);
    }
  }
  answer = answer / total;
  console.log(answer);
  return answer;
}

solution([
  [0, 3],
  [1, 9],
  [2, 6],
]);

solution([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [50, 10],
]);

solution([
  [1, 9],
  [1, 3],
  [2, 6],
  [2, 4],
]);

solution([
  [1, 9],
  [1, 4],
  [1, 5],
  [1, 7],
  [1, 3],
]);
