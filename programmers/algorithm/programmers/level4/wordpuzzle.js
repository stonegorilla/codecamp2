function solution(strs, t) {
  console.log(wordpuzzle(strs, t) !== 0 ? wordpuzzle(strs, t) : -1);
  return wordpuzzle(strs, t) !== 0 ? wordpuzzle(strs, t) : -1;
}

function wordpuzzle(strs, t, pp) {
  let answer = 0;

  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      if (t[j] !== strs[i][j]) break;

      if (j === strs[i].length - 1) {
        if (t.length - 1 > j) {
          console.log(t.slice(j + 1));
          answer =
            answer +
            wordpuzzle(
              strs.filter((_, idx) => i <= idx),
              t.slice(j + 1)
            );
        } else if (t.length - 1 === j) answer += 1;
        else answer += 0;
      }
    }
  }
  return answer;
}
solution(["ba", "na", "n", "a"], "banana");
// solution(["a", "b", "c"], "abc");

// solution(["app", "ap", "p", "l", "e", "ple", "pp"], "apple");
// solution(["ba", "an", "nan", "ban", "n"], "banana");
// solution(["ab", "na", "n", "a", "bn"], "nabnabn");
