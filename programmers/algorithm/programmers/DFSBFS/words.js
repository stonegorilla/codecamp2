function solution(begin, target, words) {
  let answer = aaa(begin, target, words);

  return answer === Infinity ? 0 : answer;
}

function aaa(begin2, target2, words2) {
  let answer2 = [];

  for (let i = 0; i < begin2.length; i++) {
    if (
      words2.includes(begin2.replace(begin2[i], target2[i])) &&
      begin2.replace(begin2[i], target2[i]) === target2
    ) {
      return 1;
    }
  }

  if (words2.length === 1) {
    return Infinity;
  }
  for (let i = 0; i < words2.length; i++) {
    let sum = 0;
    for (let j = 0; j < words2[i].length; j++) {
      if (begin2[j] === words2[i][j]) sum++;
    }

    if (sum === begin2.length - 1)
      answer2.push(
        aaa(
          words2[i],
          target2,
          words2.filter((_, index) => index !== i)
        )
      );
  }

  return answer2.length === 0 ? Infinity : Math.min(...answer2) + 1;
}

console.log(solution("hit", "cog", ["dit", "dot", "cot", "cog"]));

// solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]);
// solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
