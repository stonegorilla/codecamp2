function solution(numbers, hand) {
  let answer = "";
  let pos = [
    [1, 3],
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [0, 3],
    [2, 3],
  ];
  let leftprev = 10;
  let rightprev = 11;
  let leftdis = 0;
  let rightdis = 0;
  numbers.forEach((number) => {
    if (number === 1 || number === 4 || number === 7) {
      answer = answer.concat("L");
    } else if (number === 3 || number === 6 || number === 9) {
      answer = answer.concat("R");
    } else {
      leftdis =
        Math.abs(pos[number][0] - pos[leftprev][0]) +
        Math.abs(pos[number][1] - pos[leftprev][1]);
      rightdis =
        Math.abs(pos[number][0] - pos[rightprev][0]) +
        Math.abs(pos[number][1] - pos[rightprev][1]);
      if (leftdis < rightdis) answer = answer.concat("L");
      else if (leftdis > rightdis) answer = answer.concat("R");
      else
        hand === "left"
          ? (answer = answer.concat("L"))
          : (answer = answer.concat("R"));
    }
    answer.slice(-1) === "L" ? (leftprev = number) : (rightprev = number);
  });
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]));
