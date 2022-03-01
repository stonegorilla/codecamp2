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

const aaa = { a: "aaa", b: "ttt" };
let bbb = Object.entries(aaa);
console.log(bbb);
