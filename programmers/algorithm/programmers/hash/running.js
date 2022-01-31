// function solution(participant, completion) {

//     for (let i = 0; i < completion.length; i++) {
//       participant.splice(participant.indexOf(completion[i]), 1);
//     }

//     return participant[0];
//   }

function solution2(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    participant.splice(participant.indexOf(completion[i]), 1);
  }

  return participant[0];
}
