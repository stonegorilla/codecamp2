function solution(x) {
    let answer = [];
    let sum = 0;
    let num = x;

    while (x !== 0) {
      answer.push(x % 10);
      x = parseInt(x / 10);
    }



    console.log(answer);
  }