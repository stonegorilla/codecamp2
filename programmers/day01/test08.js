// 하샤드 수가 뭐냐
// 양의 정수 x가 하샤드 수이려면 x의 자리수의 합으로 x가 나누어져야 한다.
// 예를들어 42 같은 경우 4+2 = 6 이고 42%6 = 0 이므로 42는 하샤드 수이다.

function solution(x) {
  let answer;
  let sum = 0;
  let num = x;

  while (x !== 0) {
    sum += x % 10;
    x = parseInt(x / 10);
  }

  if (num % sum === 0) answer = true;
  else answer = false;

  console.log(answer);
}

solution(12);
solution(11);

function solution1(x) {
  let answer = 0;
  let sort = 0;
  let boolean = true;
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < i; j++) {
      if (x[i] === x[j]) {
        boolean = false;
        break;
      } else {
      }
    }

    if (boolean) sort += 1;
    boolean = true;
  }

  if (sort < parseInt(x.length / 2)) answer = sort;
  else answer = parseInt(x.length / 2);

  console.log(answer);
}

solution1([1, 3, 3, 4, 5, 6]);
solution1([2, 2, 2, 3, 3, 3]);
