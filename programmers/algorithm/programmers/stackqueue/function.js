function solution(progresses, speeds) {
  var answer = [];
  const days = progresses.map((data, index) => {
    return Math.ceil((100 - data) / speeds[index]);
  });
  console.log(days);

  let temp = days[0];
  let number = 0;
  for (let i = 0; i < days.length; i++) {
    if (days[i] > temp) {
      temp = days[i];
      answer.push(number);
      number = 0;
    }
    if (days[i] <= temp && i === days.length - 1) {
      answer.push(number + 1);
    }
    number++;
  }
  console.log(answer);
  return answer;
}

solution([93, 30, 55], [1, 30, 5]);
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
