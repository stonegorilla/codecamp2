function solution(s) {
  let arr = [];
  let arrre = [];
  let testindex = -1;
  for (let i = 0; i < s.length; i++) {
    if (arrre.length === 0) {
      if (arr.length === 0) arr.push(s[i]);
      else if (s[i] !== arr[arr.length - 1]) arr.push(s[i]);
      else {
        testindex = arr.length - 1;
        arrre.push(s[i]);
        if (testindex === 0) {
          arr = [];
          arrre = [];
          testindex = -1;
        }
      }
    } else {
      testindex--;
      if (s[i] === arr[testindex]) {
        arrre.push(s[i]);
        console.log(arrre);
      } else {
        testindex = -1;
        arr = [...arr, ...arrre, s[i]];
        arrre = [];
      }

      if (testindex === 0) {
        arr = [];
        arrre = [];
        testindex = -1;
      }
    }
  }
  console.log(arr.length === 0 ? 1 : 0);

  return arr.length === 0 ? 1 : 0;
}

solution("baabaa");
solution("ccdd");
solution("tsaast");
solution("cccdd");
solution("cddcddef");
solution("ttssdtdrrdtdsstttddtsdds");

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
