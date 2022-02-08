let input = require("fs").readFileSync("example.txt").toString().split("\n");

for (var i = 0; i < input.length - 1; i++) {
  input[i] = input[i].replace("\r", "");
}

for (var i = 0; i < input.length - 1; i++) {
  console.log(Number(input[i].split(" ")[0]) + Number(input[i].split(" ")[1]));
}
