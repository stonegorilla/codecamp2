function solution(dartResult) {
  let sum = 0;
  let i = 0;
  let sumperframeprev = 0;
  let sumperframe = 0;
  while (i < dartResult.length) {
    sumperframeprev = sumperframe;
    sumperframe = 0;

    sumperframe += Number(dartResult[i]);
    i++;
    if (dartResult[i] === "0") {
      sumperframe = 10 * sumperframe;
      i++;
    }
    if (dartResult[i] === "S") {
      sumperframe = Math.pow(sumperframe, 1);
      i++;
    } else if (dartResult[i] === "D") {
      sumperframe = Math.pow(sumperframe, 2);
      i++;
    } else {
      sumperframe = Math.pow(sumperframe, 3);
      i++;
    }

    if (dartResult[i] === "*") {
      sumperframeprev = sumperframeprev * 2;
      sumperframe = sumperframe * 2;
      i++;
    } else if (dartResult[i] === "#") {
      sumperframe = -1 * sumperframe;
      i++;
    } else {
    }
    sum += sumperframeprev;
  }
  sum += sumperframe;

  return sum;
}

console.log(solution("1D2S3T*"));
