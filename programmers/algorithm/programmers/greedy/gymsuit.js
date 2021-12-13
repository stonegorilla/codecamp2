function solution(n, lost, reserve) {
  lost.sort((a, b) => {
    return a - b;
  });

  reserve.sort((a, b) => {
    return a - b;
  });
  let lost1 = lost.filter((data) => !reserve.includes(data));
  let reserve1 = reserve.filter((data) => !lost.includes(data));
  console.log(lost);
  reserve1.forEach((data) => {
    if (lost1.includes(data - 1)) {
      lost1.splice(lost1.indexOf(data - 1), 1);
    } else if (lost1.includes(data + 1)) {
      lost1.splice(lost1.indexOf(data + 1), 1);
    } else {
    }
  });

  return n - lost1.length;
}

function solution2(n, lost, reserve) {
  let lost1 = lost.filter((data) => !reserve.includes(data));
  let reserve1 = reserve.filter((data) => !lost.includes(data));
  return (
    n -
    lost1.filter((a) => {
      const b = reserve1.find((r) => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve1 = reserve1.filter((r) => r !== b);
    }).length
  );
}

solution2(5, [2, 4], [1, 3, 5]);
solution2(5, [2, 4], [3]);
solution2(3, [3], [1]);
