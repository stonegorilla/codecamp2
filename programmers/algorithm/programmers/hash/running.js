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
  participant = participant.sort();
  completion = completion.sort();

  for (let i; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

function solution4(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}
solution3(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
