function solution(array) {
  result = [];

  for (let i = 0; i < array.length; i++) {
    let lishubo = [];
    for (let j = 0; j < i; j++) {
      if (array[j] <= array[i]) lishubo.push(result[j].lis + 1);
    }

    result.push({
      number: array[i],
      lis: lishubo.length !== 0 ? Math.max(...lishubo) : 1,
    });
  }
  console.log(Math.max(...result.map((data) => data.lis)));
  return Math.max(...result.map((data) => data.lis));
}

solution([6, 2, 5, 1, 7, 4, 8, 3]);
