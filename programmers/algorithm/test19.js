function solution(arr1, arr2) {
  var answer = [[]];
  var answer1 = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1[i].length; j++) {
      answer1.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(answer1);
  }
  return answer;
}

function solution2(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}
