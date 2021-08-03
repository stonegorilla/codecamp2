// aaa@bbb.com 에 @ 라는 것이 포함이 되어 있는가?
const a = "aaa@bbb.com".includes("@");

console.log(a);

// aaa@bbb.com 이 aaa@bbb.com 과 같은가 ?
const b = /aaa@bbb.com/.test("aaa@bbb.com");
// aaa@bbb.com 이 aaa@bbc.com 과 같은가?
const c = /aaa@bbb.com/.test("aaa@bbc.com");
console.log(b);
console.log(c);

// /\w+@\w+.\w+/
// \w 문자 1개 \w+ 한개 이상

// w+@+w+.+w 형식인가
const d = /\w+@\w+\.\w+/.test("aaa@bbb,com");
console.log(d);

//  \. .을 문자로 보겠다.

console.log(/\d+-\d+-\d+/.test("010-4333-3233"));

console.log(/\d{3}-\d{3,4}-\d{4}/.test("010-123-4444"));

console.log(/2021.07.01/.test("2021.07.01"));

// ^ $ 이용해서 반드시 4자리서 시작해서 2자리로 끝나야 해~
console.log(/^\d{4}.\d{2}.\d{2}$/.test("2021.07.01"));
