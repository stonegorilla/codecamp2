function solution(brown, yellow) {
  return [
    brown / 4 +
      1 +
      Math.sqrt(Math.pow(brown / 2 + 2, 2) - 4 * (brown + yellow)) / 2,
    brown / 4 +
      1 -
      Math.sqrt(Math.pow(brown / 2 + 2, 2) - 4 * (brown + yellow)) / 2,
  ];
}
