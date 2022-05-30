// function solution(s)
// {
//     let arr = [];
//     let arrre = [];

//     for(let i=0; i<s.length; i++){

//         if(arrre.length === 0){
//             if(!arr.length) arr.push(s[i]);
//             else if(s[i] !== arr[arr.length-1]) arr.push(s[i]);
//             else{
//                 arrre.push(s[i])
//             }
//         }else{
//             if(s[i])
//         }

//     }

//     return answer;
// }

function solution(s) {
  let array = [];
  for (let i = 0; i < s.length; i++) {
    if (array[array.length - 1] !== s[i]) array.push(s[i]);
    else {
      array.pop();
    }
  }

  return array.length === 0 ? 1 : 0;
}
