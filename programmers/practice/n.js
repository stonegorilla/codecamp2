//foreach를 배워보자.

const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));
// element는 for문의 array1[i] 라고 보면 쉽다.
// 그리고 index인 i는 foreach문을 돌면서 1씩 증가한다고 보면 된다.

// items 에 있는 item들을 copy라는 곳에 담고 싶다.

const items = ["item1", "item2", "item3"];
const copyFor = [];
const copyForEach = [];
// const copyMap = [];
for (let i = 0; i < items.length; i++) {
  copyFor.push(items[i]);
}
console.log(copyFor);

items.forEach(function (item) {
  copyForEach.push(item);
});

// item 이 아니라 다른 변수이름이어도 된다. aaa 여도 되고 bdsf 여도 된다.
console.log(copyForEach);

const copyMap = items.map((item) => item);

console.log(copyMap);

// 생각해보니 const 변수를 빈배열로 선언했을 때, 그 안에 값을
// 넣으려면 배열.push(넣을값) 를 사용해야 한다.

// words.shift 를 만나게 되면 다음번 항목은 건너뛰게 된다.
let words = ["one", "two", "three", "four"];
words.forEach(function (word) {
  console.log(word);

  words.shift();
});
// 배열평탄화는 재밌는기능이지만, 흠... 잘쓰일것 같진 않다?

