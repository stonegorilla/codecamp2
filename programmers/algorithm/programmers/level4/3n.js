// function solution(n) {
//   function all(n) {
//     if (n === 2) return 3;
//     else return 3 * all(n - 2) + verti(n - 2);
//   }

//   function verti(n) {
//     if (n === 2) return 2;
//     else return 2 * all(n - 2) + verti(n - 2);
//   }
//   if (n % 2 === 1) return 0;
//   else return all(n);
// }

function solution(n) {
  let array = [3, 11];
  if (n % 2 === 1) return 0;
  else if (n === 2) return 3;
  else if (n === 4) return 11;
  else {
    for (let i = 2; i < n / 2; i++) {
      if (4 * array[i - 1] - array[i - 2] >= 0)
        array.push((4 * array[i - 1] - array[i - 2]) % 1000000007);
      else
        array.push((4 * array[i - 1] - array[i - 2] + 1000000007) % 1000000007);
    }
    return array[array.length - 1] % 1000000007;
  }
}

console.log(23 % 14);
