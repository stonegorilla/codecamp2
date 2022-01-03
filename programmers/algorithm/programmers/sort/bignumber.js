// function solution(numbers) {
//   var answer = "";
//   let sorted = numbers.sort(function (a, b) {
//     let i = 0;
//     let j = 0;
//     let gobacki = false;
//     let gobackj = false;
//     while (true) {
//       if (String(a)[i] && String(b)[j] && String(b)[j] === String(a)[i]) {
//         if (!gobacki) i++;
//         if (!gobackj) j++;
//         if (gobacki && gobackj) return j - i;
//       } else if (!String(a)[i] && !gobacki) {
//         i--;
//         gobacki = true;
//       } else if (!String(b)[j] && !gobackj) {
//         j--;
//         gobackj = true;
//       } else {
//         return Number(String(b)[j]) - Number(String(a)[i]);
//       }
//     }
//   });

//   answer = sorted.join("");
//   console.log(answer);
//   return answer;
// }

function solution(numbers) {
  var answer = "";
  let sorted = numbers.sort(function (a, b) {
    let c = Number(String(a) + String(b));
    let d = Number(String(b) + String(a));
    return d - c;
  });

  answer = sorted.join("");
  if (answer[0] === "0") answer = "0";
  return answer;
}
solution([6, 10, 2]);
solution([3, 30, 34, 5, 9]);
solution([3, 33, 3, 33, 333]);
solution([1, 10, 100, 1000]);
solution([1000, 100, 10, 1]);
solution([67, 676, 677]);
solution([979, 97, 978, 81, 818, 817]);
