// 탐욕법 , 시간표 최대한 꾸겨 넣기 ㅎㅎ
function solution(activity) {
  let result = [];
  let sorted = activity.sort(function (prev, cur) {
    return prev[2] - cur[2];
  });
  let last = 0;
  sorted.forEach(function (item) {
    if (last < item[1]) {
      last = item[2];
      result.push(item);
    }
  });
  //   return result.map(function (r) {
  //     return r[0];
  //   });
  return result.map((r) => {
    return r[0];
  });
}

console.log(
  solution([
    [1, 1, 3],
    [2, 2, 5],
    [3, 4, 7],
    [4, 1, 8],
    [5, 5, 9],
    [6, 8, 10],
    [7, 9, 11],
    [8, 11, 14],
    [9, 13, 16],
  ])
);
