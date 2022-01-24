function solution(string1, string2) {
  answer = [];
  for (let i = 0; i < string1.length; i++) {
    answer.push([]);

    for (let j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        answer[i].push(
          i !== 0 ? answer[i - 1][j] + 1 : j !== 0 ? answer[i][j - 1] + 1 : 1
        );
      } else {
        answer[i].push(
          i !== 0 && j !== 0
            ? Math.max(answer[i - 1][j], answer[i][j - 1])
            : i === 0 && j !== 0
            ? answer[i][j - 1]
            : i !== 0 && j === 0
            ? answer[i - 1][j]
            : 0
        );
      }
    }
  }

  return answer[string1.length - 1][string2.length - 1];
}

console.log(solution("acaykp", "capcak"));
