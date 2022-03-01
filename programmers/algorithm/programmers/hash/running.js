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
  let participant = participant.sort();
  let completion = completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
    }
  }

  return answer;
}

solution3(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
