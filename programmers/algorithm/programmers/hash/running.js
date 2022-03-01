// function solution(participant, completion) {

//     for (let i = 0; i < completion.length; i++) {
//       participant.splice(participant.indexOf(completion[i]), 1);
//     }

//     return participant[0];
//   }

// function solution2(participant, completion) {
//   for (let i = 0; i < completion.length; i++) {
//     participant.splice(participant.indexOf(completion[i]), 1);
//   }

//   return participant[0];
// }

function solution3(participant, completion) {
  answer = "";
  console.log(participant);
  let participant2 = participant.sort((a, b) => b - a);
  let completion2 = completion.sort((a, b) => b - a);

  // for (let i = 0; i < completion.length; i++) {
  //   if (participant[i] !== completion[i]) {
  //     answer = participant[i];
  //   }
  // }
  console.log(participant2, completion2);
  return answer;
}

solution3(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
