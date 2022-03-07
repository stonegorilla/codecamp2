function solution(operations) {
  let answer = [];
  operations = operations.map((data) => data.split(" "));

  for (let i = 0; i < operations.length; i++) {
    if (operations[i][0] === "I") answer.push(Number(operations[i][1]));

    if (operations[i][0] === "D") {
      if (operations[i][1] === "1")
        answer = answer.filter((data) => data !== Math.max(...answer));
      if (operations[i][1] === "-1")
        answer = answer.filter((data) => data !== Math.min(...answer));
    }
    console.log(answer);
  }
  if (answer.length === 0) return [0, 0];
  else return [Math.max(...answer), Math.min(...answer)];
}

solution(["I 16", "D 1"]);
solution(["I 7", "I 5", "I -5", "D -1"]);
