function aaa() {
  const child = "철수";

  function bbb() {
    console.log(child + "입니다.");
  }

  bbb();
}

aaa();

function aaa2() {
  return "철수에요";
}

console.log(aaa2());

function aaa3() {
  const child = "영희";
  return function bbb() {
    console.log(child + "입니다.");
  };
}

aaa3()();

function aaa4(child) {
  return function bbb() {
    console.log(child + "입니다.");
  };
}

aaa4("장삐쭈")();

const add2 = (a, b) => a + b;

console.log(add2(1, 2));

["철수", "영희", "훈이"].map((data, index) => {
  let bbb = data + "어린이";
  return bbb;
});
