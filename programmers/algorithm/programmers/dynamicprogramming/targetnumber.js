function solution(numbers, target) {
  var answer = 0;
  let arr = [];
  let angelnumber = Math.pow(10, 1) * numbers + numbers;
  arr.push([numbers]);
  arr.push([
    angelnumber,
    numbers + numbers,
    numbers - numbers,
    numbers * numbers,
    numbers / numbers,
  ]);

  for (let i = 2; i < 8; i++) {
    angelnumber = Math.pow(10, i) * numbers + angelnumber;
    arr.push([angelnumber]);
    for (let j = 0; j < i; j++) {
      for (let op1 of arr[j]) {
        for (let op2 of arr[i - 1 - j]) {
          arr[i].push(op1 + op2);
          arr[i].push(op1 - op2);
          arr[i].push(op1 * op2);
          arr[i].push(op1 / op2);
        }
      }
    }
  }

  for (let i = 0; i < 8; i++) {
    if (arr[i].includes(target)) {
      return i + 1;
    }
  }
  return -1;
}

console.log(solution(5, 60));
