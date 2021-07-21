function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    participant.splice(participant.indexOf(completion[i]), 1);
  }

  console.log(participant[0]);
}

solution(["leo", "kiki", "eden", "leo"], ["leo", "eden", "kiki"]);
