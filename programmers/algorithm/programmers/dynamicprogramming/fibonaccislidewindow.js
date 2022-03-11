function fibonacci(n) {
  function fibHelp(lastTwo, x) {
    const sum = lastTwo[0] + lastTwo[1];
    return x == 2 ? sum : fibHelp([lastTwo[1], sum], x - 1);
  }
  return n < 2 ? n : fibHelp([0, 1], n);
}

console.log(fibonacci(70));

// 왜 이게 슬라이딩 윈도우 방식인가...
// lasttwo는 아래값에서부터, x는 위에서부터
