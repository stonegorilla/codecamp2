function solution(s, n) {
  var answer = "";
  var arr = [];
  var arr2 = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i].charCodeAt(0));
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 65 && arr[i] <= 90) {
      arr[i] = ((arr[i] - 65 + n) % 26) + 65;
    } else if (arr[i] >= 97 && arr[i] <= 122) {
      arr[i] = ((arr[i] - 97 + n) % 26) + 97;
    } else {
    }

    arr[i] = String.fromCharCode(arr[i]);
  }
  answer = arr.join("");
  return answer;
}

// 얘는 시저 암호이다. 예전 로마의 카이사르가 애용했던 암호 방식이다.
// 물론 지금은 컴퓨터 시대라 25번정도만 돌려보면 이런 방식의 암호는 모두 다 풀린다.
//(위의 코드에서 조금만 수정하면 암호 찾는 것은 식은 죽 먹기이다 ㅋㅋ)
// 하지만, 그 당시에는 그런대로 잘 먹혔던 방식이다.

function solution2(s, n) {
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (uppercase.indexOf(s[i])) {
      result += uppercase[(uppercase.indexOf(s[i]) + n) % 26];
    } else if (lowercase.indexOf(s[i])) {
      result += lowercase[(lowercase.indexOf(s[i]) + n) % 26];
    } else {
      result += " ";
    }
  }

  return result;
}
solution("abCd E", 4);
