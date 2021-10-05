function solution(n, arr1, arr2) {
  let arr1binary = [];
  let arr2binary = [];
  let arrbinarycombined = [];
  let arr = [];
  let string = "";
  let i = 0;
  arr1.forEach((data) => {
    arr = [];
    while (i < n) {
      arr.push(data % 2);
      data = parseInt(data / 2);
      i++;
    }
    arr1binary.push(arr.reverse());
    i = 0;
  });
  arr2.forEach((data) => {
    arr = [];
    while (i < n) {
      arr.push(data % 2);
      data = parseInt(data / 2);
      i++;
    }
    arr2binary.push(arr.reverse());
    i = 0;
  });

  for (let x = 0; x < n; x++) {
    string = "";
    for (let y = 0; y < n; y++) {
      if (arr1binary[x][y] === 1 || arr2binary[x][y] === 1)
        string = string.concat("#");
      else string = string.concat(" ");
    }
    arrbinarycombined.push(string);
  }

  return arrbinarycombined;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
