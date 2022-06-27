function solution(dartResult) {
  let sum = 0;
  let i = 0;
  let prev = 0;
  let current = 0;
  while (i < dartResult.length) {
    prev = current;
    current = 0;

    current += Number(dartResult[i]);
    i++;
    if (dartResult[i] === "0") {
      current = 10 * current;
      i++;
    }
    if (dartResult[i] === "S") {
      current = Math.pow(current, 1);
      i++;
    } else if (dartResult[i] === "D") {
      current = Math.pow(current, 2);
      i++;
    } else {
      current = Math.pow(current, 3);
      i++;
    }

    if (dartResult[i] === "*") {
      prev = prev * 2;
      current = current * 2;
      i++;
    } else if (dartResult[i] === "#") {
      current = -1 * current;
      i++;
    } else {
    }
    sum += prev;
  }
  sum += current;

  return sum;
}

console.log(solution("1D2S3T*"));
