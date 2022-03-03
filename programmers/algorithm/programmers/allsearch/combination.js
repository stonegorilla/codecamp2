function permutation(array) {
  if (array.length === 1) return [array];

  let answer = array.reduce((acc, cur, idx) => {
    acc.push([1, 1, 1]);
    return acc;
  }, []);
  console.log(answer);
  return answer;
}

permutation([2, 4, 4, 4, 4]);
