function solution1_1(s) {
  var answer = 0;

  answer = Number(s);
  return answer;
}

function solution1_2(s) {
  return s / 1;
}
function solution1_3(s) {
  return +s;
}

function solution2_1(phone_number) {
  var a = phone_number.length - 4;
  for (var i = 0; i < a; i++) {
    phone_number = phone_number.replace(phone_number[i], "*");
  }
  var answer = phone_number;
  console.log(answer);
  return answer;
}

function solution3_1(arr) {
  var answer = [];
  answer.push(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    if (arr[i - 1] != arr[i]) {
      answer.push(arr[i]);
    }
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log(answer);

  return answer;
}
