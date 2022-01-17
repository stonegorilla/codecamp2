function solution(numbers, target) {
  let numbers1 = numbers[0];
  let numberschanged = numbers.slice(1);
  if (numberschanged.length === 0) {
    console.log("bbb");
    if (numbers1 === target || numbers1 === -target) return 1;
    else return 0;
  } else {
    return (
      solution(numberschanged, target + numbers1) +
      solution(numberschanged, target - numbers1)
    );
  }
}

console.log(solution([1, 1, 1, 1, 1], 3));

// 왜 그냥 numbers 로 할때는 안될까... numbers.shift 사용했는데 흠 ...
// 전역에 적용되는 것이라 그런가...
