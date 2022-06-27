function solution(bowling) {
  let i = 0;
  let array = [];

  let current = 0;

  while (i < 10) {
    if (bowling[i][0] === "X") {
      current += 10;
      // strike 일땐 뒤에 2개 더해
      if (i === 9) {
        if (bowling[i][1] === "X" && bowling[i][2] === "X") current += 20;
        else if (bowling[i][1] === "X")
          current = current + 10 + Number(bowling[i][2]);
        else if (bowling[i][2] === "/") current += 10;
        else current = current + Number(bowling[i][1]) + Number(bowling[i][2]);
      } else if (bowling[i + 1][0] === "X") {
        current += 10;

        if (i === 8) {
          if (bowling[i + 1][1] === "X") current += 10;
          else current += Number(bowling[i + 1][1]);
        } else if (bowling[i + 2][0] === "X") {
          current += 10;
        } else {
          current += Number(bowling[i + 2][0]);
        }
      } else if (bowling[i + 1][1] === "/") {
        current += 10;
      } else {
        current =
          current + Number(bowling[i + 1][0]) + Number(bowling[i + 1][1]);
      }
    } else if (bowling[i][1] === "/") {
      current += 10;

      if (i === 9) {
        if (bowling[i][2] === "X") current += 10;
        else current += Number[i][2];
      } else if (bowling[i + 1][0] === "X") {
        current += 10;
      } else {
        current += Number(bowling[i + 1][0]);
      }
    } else {
      current = current + Number(bowling[i][0]) + Number(bowling[i][1]);
    }

    array.push(current);
    i++;
  }

  // 9프레임
  // if(bowling[8] === "X"){

  // }else if(bowling[8][1] === "/"){
  //   current += 10;

  // }else{
  //   current = current + Number(bowling[8][0])+Number(bowling[8][1])
  // }

  console.log(array);
  return 0;
}

solution(["X", "X", "9/", "X", "X", "X", "90", "X", "9/", "X9/"]);
solution(["X", "X", "9/", "X", "X", "X", "90", "X", "9/", "81"]);
solution(["X", "X", "X", "X", "X", "X", "X", "X", "X", "X9/"]);
solution(["X", "X", "X", "X", "X", "X", "X", "X", "90", "X9/"]);
