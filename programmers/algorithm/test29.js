function solution(n, lost, reserve) {
  let reservenotstolen = [];
  reserve = reserve.sort(function (a, b) {
    return a - b;
  });
  lost = lost.sort(function (a, b) {
    return a - b;
  });
  reserve.forEach((item) => {
    if (lost.includes(item)) {
      lost.splice(lost.indexOf(item), 1);
    } else {
      reservenotstolen.push(item);
    }
  });

  reservenotstolen.forEach((item) => {
    if (lost.includes(item - 1)) {
      lost.splice(lost.indexOf(item - 1), 1);
    } else if (lost.includes(item + 1)) {
      lost.splice(lost.indexOf(item + 1), 1);
    } else {
    }
  });

  return n - lost.length;
}

console.log(solution(16, [3, 4, 5], [1, 3, 5]));
