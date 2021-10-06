function solution(board, moves) {
  let answer = 0;
  let bar = [];
  moves.forEach((item) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][item - 1] !== 0) {
        bar.push(board[i][item - 1]);
        board[i][item - 1] = 0;
        break;
      }
    }
    if (bar.length < 2) {
    } else if (bar[bar.length - 1] === bar[bar.length - 2]) {
      bar.pop();
      bar.pop();
      answer += 2;
    } else {
    }
  });
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
