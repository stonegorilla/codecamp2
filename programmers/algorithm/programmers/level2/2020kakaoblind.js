function solution(s) {
  let answer = [];
  for (i = 1; i <= Math.floor(s.length / 2); i++) {
    let string = "";
    let stlength = s.length;
    let state = 0;
    for (j = 0; j < s.length; j = j + i) {
      if (s.slice(j, j + i) === string) {
        state === 0 || state === 8 ? (stlength -= i - 1) : (stlength -= i);
        state++;
      } else {
        string = s.slice(j, j + i);

        state = 0;
      }
    }
    answer.push(stlength);
  }

  return Math.min(...answer);
}

solution("aabbaccc");
solution("abababababa");
solution("ababcdcdababcdcd");
solution("abcabcabcabcdededededede");
solution("abcdefghijklmnop");
solution("a");

let aa = [3, 5, 3, 2, 1];
console.log(aa.slice(3, 5));
