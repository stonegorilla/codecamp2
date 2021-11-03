function solution(board) {
  let answer = 0;
  let not = true;
  let boardlength = Math.min(board.length, board[0].length);

  for (let s = 0; s < boardlength; s++) {
    for (let t = 0; t < board.length - s; t++) {
      for (let w = 0; w < board[0].length - s; w++) {
        for (let i = t; i < s + t; i++) {
          for (let j = w; j < s + w; j++) {
            if (board[i][j] === 0) {
              not = false;
            } else if (i === s + t - 1 && j === s + w - 1 && not === true)
              answer = s;
            else {
            }
          }
        }
        not = true;
      }
    }
  }

  return (answer + 1) * (answer + 1);
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
);
console.log(
  solution([
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ])
);
