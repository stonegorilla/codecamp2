// function solution(number, k) {
//   let array = number.split("");
//   let i = 0;

//   while (k > 0) {
//     let array2 = array.filter((_, idx) => idx <= k + i && idx >= i);
//     if (array2.length <= k) {
//       array.splice(i);
//       k = 0;
//     }
//     let s = array2.indexOf(String(Math.max.apply(0, array2)));

//     array.splice(i, s);

//     k = k - s;
//     i++;
//   }

//   return array.join("");
// }

function solution(number, k) {
  let array = [];
  for (let i = 0; i < number.length; i++) {
    const el = number[i];
    while (k > 0 && array[array.length - 1] < el) {
      array.pop();
      k--;
    }

    array.push(el);
  }
  array.splice(array.length - k, k);

  return array.join("");
}

solution("1924", 2);
solution("1231234", 3);
