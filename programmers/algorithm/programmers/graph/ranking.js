function solution(n, results) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (
      winnumbers(i, results).length + losenumbers(i, results).length ===
      n - 1
    )
      answer++;
  }
  console.log(answer);
  return answer;
}

function winnumbers(number, results2, duparr) {
  let array = [];
  let results3 = results2.filter((data) => data[0] !== number);
  for (var i of results2) {
    if (i[0] === number && !array.includes(i[1])) {
      array.push(i[1]);
      array = array.concat(winnumbers(i[1], results3));
    }
  }
  const set = new Set(array);
  array = [...set];
  return array;
}

function losenumbers(number, results2, duparr) {
  let array = [];

  let results3 = results2.filter((data) => data[1] !== number);

  for (var i of results2) {
    if (i[1] === number && !array.includes(i[0])) {
      array.push(i[0]);
      array = array.concat(losenumbers(i[0], results3));
      const set = new Set(array);
      array = [...set];
    }
  }

  return array;
}

solution(5, [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
]);

solution(3, [
  [3, 1],
  [3, 2],
  [1, 2],
]);

solution(4, [
  [1, 2],
  [2, 3],
  [1, 4],
]);
