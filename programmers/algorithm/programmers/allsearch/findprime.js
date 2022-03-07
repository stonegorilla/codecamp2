function solution(numbers) {
  let answer = 0;
  let array = Array.from(numbers);
  let permutation = [];
  for (let i = 1; i <= array.length; i++) {
    permutation.push(...getPermutation(array, i));
  }

  let permujoin = permutation.map((data) => Number(data.join("")));
  const set = new Set(permujoin);
  permujoin = [...set];
  permujoin = permujoin.filter((data) => data !== 1 && data !== 0);

  for (let i = 0; i < permujoin.length; i++) {
    let sosu = true;
    for (let j = 2; j <= Math.sqrt(permujoin[i]); j++) {
      if (permujoin[i] % j === 0) {
        sosu = false;
        break;
      }
    }
    if (sosu === true && permujoin[i] !== 1 && permujoin[i] !== 0) {
      answer++;
    }
  }

  return answer;
}

const getPermutation = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutation(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};

solution("011");
