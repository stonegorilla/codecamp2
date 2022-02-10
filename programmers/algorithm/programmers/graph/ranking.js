function solution(n, results) {
  var answer = 0;
  console.log(winnumbers(4, results, [4]));
  for (let i = 1; i <= n; i++) {
    console.log(winnumbers(i, results, [i]).length);
    if (
      winnumbers(i, results, [i]).length +
        losenumbers(i, results, [i]).length ===
      n - 1
    )
      answer++;
  }
  // console.log(answer);
  return answer;
}

function winnumbers(number, results2, duparr) {
  let array = [];
  let results3 = results2.filter((data) => data[0] !== number);
  for (var i of results2) {
    if (i[0] === number && !duparr.includes(i[1])) {
      array.push(i[1]);
      duparr.push(i[1]);
      array = array.concat(winnumbers(i[1], results3, duparr));
      duparr = [...array];
    }
  }

  return array;
}

function losenumbers(number, results2, duparr) {
  let array = [];
  let results3 = results2.filter((data) => data[0] !== number);
  for (var i of results2) {
    if (i[1] === number && !duparr.includes(i[0])) {
      array.push(i[0]);
      duparr.push(i[0]);
      array = array.concat(losenumbers(i[0], results3, duparr));
      duparr = [...array];
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

// solution(3, [
//   [3, 1],
//   [3, 2],
//   [1, 2],
// ]);

// solution(4, [
//   [1, 2],
//   [2, 3],
//   [1, 4],
// ]);
