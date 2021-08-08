function solution(N, stages) {
  let answer = [];
  let answer1 = [];
  let answer2 = [];
  let answer3 = [];
  let bunja = 0;
  let bunmo = 0;
  
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] === i) bunja = bunja + 1;

      if (stages[j] >= i) bunmo = bunmo + 1;
    }
    if(bunmo ===0) answer.push(0);
    else answer.push(bunja / bunmo);
    bunja = 0;
    bunmo = 0;
  }
  
  for (let i=0; i<answer.length; i++){
    answer1.push(answer[i]);
  }
  
  answer2 = answer.sort(function(a,b){
    if(a>b) return -1;
    else if(a===b) return 0;
    else return 1;
  }) 

  for(let i=0; i<answer.length; i++){
    if( answer2[i-1] === answer2[i] && i!==0){
      answer3.push(answer1.indexOf(answer2[i],answer3[i-1])+1)
    }else{
      answer3.push(answer1.indexOf(answer2[i])+1)
    }
        
      
    
    
  }
  return answer3;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4,[4,4,4,4,4]))
const a = [2,2,2,2,2]
console.log(a.indexOf(2,2))