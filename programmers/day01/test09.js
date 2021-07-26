// function solution(participant, completion) {
//   for (let i = 0; i < completion.length; i++) {
//     participant.splice(participant.indexOf(completion[i]), 1);
//   }

//   console.log(participant[0]);
// }

// solution(["leo", "kiki", "eden", "leo"], ["leo", "eden", "kiki"]);


function solution1(participant, completion) {
  
  let answer = '';

  participant = participant.sort();
  completion = completion.sort();

  for(let i=0; i<participant.length; i++){
    if(participant[i] !== completion[i]){
      answer = participant[i];
      break;
    }
  }
  return answer;
  
}

solution1(["leo", "kiki", "eden", "leo"], ["leo", "eden", "kiki"]);



