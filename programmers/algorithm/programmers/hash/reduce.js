// const array1 = [1];
// const reducer = (prev, cur) => prev - cur;
// answer = reducer(3, 5);
// reduceanswer = array1.reduce(reducer, 3);
// console.log(answer);
// console.log(reduceanswer);
// const t = {};
// console.log(t["name"]);

// const aaa = "aaat".concat("aaa", "bbb");
// console.log(aaa);

// const champ = {
//   Aatrox: 300,
//   Zoe: 60,
//   Ahri: 200,
//   Ashe: 1000,
//   Garen: 400,
// };

// const sortable = Object.entries(champ)
//   .sort(([, a], [, b]) => a - b)
//   .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
// console.log(sortable);

// const aaa = { a: "aaa", b: "ttt" };
// let bbb = Object.entries(aaa);
// console.log(bbb);

// let aaa = [
//   [1, 2],
//   [2, 1],
//   [3, 9],
//   [4, 7],
// ];
// aaa = aaa.sort(([, a], [, b]) => a - b);
// console.log(aaa);

// const map1 = new Map();
// map1.set("a", 1);
// map1.set("b", 2);
// let bbb = [...map1];
// console.log(bbb);

aaa = [5, 3, 2, 6, 3, 88];

aaa.shift();
aaa.push(5);
aaa.push(82);
let bbb = aaa.shift();
let ccc = aaa.pop();
console.log(aaa, bbb, ccc);
