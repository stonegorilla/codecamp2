function sortmade(array, func) {
  return func(5, 3);
}

function func(a, b) {
  return a - b;
}

console.log(sortmade([3, 5, 4], (a, b)));
