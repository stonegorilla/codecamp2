function solution(w, h) {
  let answer = 0;
  let memory = 0;
  for (let i = 1; i <= w; i++) {
    answer += Math.ceil((h * i) / w) - memory;
    memory = Math.floor((h * i) / w);
  }

  return w * h - answer;
}

solution(8, 12);
