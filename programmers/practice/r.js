function* generatorFunction() {
  console.log("안녕하세요?");
  yield 1;
  console.log("제너레이터 함수");
  yield 2;
  console.log("function*");
  yield 3;
  return 4;
}

const generator = generatorFunction();

generator.next();
generator.next();

function* sumGenerator() {
  console.log("sumGenerator이 시작됐습니다.");
  let a = yield;
  if (a.type === 1) {
    console.log("a값을 받았습니다.");
  }
  let b = yield;
  console.log("b값을 받았습니다.");
  yield a + b;
}

const sum = sumGenerator();
sum.next();
sum.next({ type: 1 });
sum.next(1);
sum.next(1);
