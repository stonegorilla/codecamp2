let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

var a = input[0];
var b = input[1];

console.log(a + b);
