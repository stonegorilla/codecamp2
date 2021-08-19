// const classmates = ["철수","영희","훈이"]

// const classmates1 = classmates.map((data) => data +"어린이")

// // map 함수는 classmates를 바꾸지는 않는 구나
// // 그래서 담가 주어야 한다.
// console.log(classmates1)

// const classmates2 = [
//     { name : "철수", age : 12},
//     { name : "영희", age : 15},
//     { name : "훈이", age : 18}
// ]

// const classmates3 = classmates2.map((data) => ({ name : `${data.name}어린이`}))

// // console.log(classmates2)
// // console.log(classmates3)

// const classmates4 = classmates2.map((data)=>({name : data.name,age:data.age, school : "다람쥐초등학교"}))

// console.log(classmates4)

// const classmates5 = classmates2.map((data) =>({...data, school : "다람쥐초등학교"}))

// console.log(classmates5)

// const classmates6 = [
//     {name: "철수", age : 13},
//     {name: "영희", age : 10},
//     {name: "훈이", age : 11}

// ]

// const classmates7 = classmates6.map((data)=>({name : data.name, age: data.age, school:"토끼초등학교"}))
// const classmates8 = classmates6.map((data)=>({...data, school : "호랑이초등학교"}))

// console.log(classmates7)
// console.log(classmates8)

// const ages = [10,13,11]

// ages1 = ages.filter((data)=>(data>=11))

// console.log(ages1)

// const classmates9 = [
//          { name : "철수", age : 12},
//          { name : "영희", age : 15},
//          { name : "훈이", age : 18}
// ]

// const classmates10 = classmates9.filter((data)=>(data.age>=11))

// console.log(classmates10)

// const classmates11 = ['철수','영희','훈이']

// const classmates12 = classmates11.filter(data=>(data!=='철수'))

// console.log(classmates12)

// const classmates13 = [
//     {age:10},
//     {age:13},
//     {age:15},
// ]

// const classmates14 = classmates13.filter(data=>data.age >= 15)

// console.log(classmates14)

// const classmates15 = [
//               { name : "철수", age : 10, school:"토끼초등학교"},
//               { name : "영희", age : 13, school:"다람쥐초등학교"},
//               { name : "훈이", age : 11, school:"토끼초등학교"}
//             ]

// const classmates16 = classmates15.filter(data=>data.school === "토끼초등학교")
// const classmates17 = classmates15.filter(data => data.age === 11)
// const classmates18 = classmates15.filter(data => data.name === "영희")
// console.log(classmates16)
// console.log(classmates17)
// console.log(classmates18)

// const classmates19 = [
//     { name : "철수", age : 10, school:"토끼초등학교"},
//     { name : "영희", age : 13, school:"다람쥐초등학교"},
//     { name : "훈이", age : 11, school:"토끼초등학교"}
//   ]

// const classmates20 = classmates19.filter(data=>data.age >= 11)

// console.log(classmates20)

// const classmates21 = classmates20.map(data => data.age)
// console.log(classmates21)

// const classmates22 = classmates20.map(data=>({...data, gender: "M"}))
// console.log(classmates22)

// const classmates23 = [
//     { name : "철수", age : 10, school:"토끼초등학교"},
//     { name : "영희", age : 13, school:"다람쥐초등학교"},
//     { name : "훈이", age : 11, school:"토끼초등학교"}
//   ]

// const classmates24 = classmates23.filter(data=>data.school === "토끼초등학교")
// const classmates25 = classmates24.map(data=>({...data, candy: 10}))

// const classmates26 = classmates23.filter(data=>data.school === "다람쥐초등학교").map(data=>({...data, name :data.name+"어린이"}))
// // ...data 되게 유용하네 정말 작은 것 하나 바꿔야 할때, 다른것은 그대로 둬야 하는데 , 이때 ...data가 많이 쓰인다.
// console.log(classmates25)
// console.log(classmates26)

const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

fruits1 = [];
fruits2 = [];

for (var i = 0; i < 10; i++) {
  if (i % 2 === 1) {
    fruits1.push({ number: fruits[i].number, title: fruits[i].title });
  }
}
console.log(fruits1);
// 겁나게 복잡하다.

for (var i = 0; i < 10; i++) {
  if (i < 5) {
    fruits2.push({ number: fruits[i].number, title: fruits[i].title });
  }
}
console.log(fruits2);
fruits3 = fruits.filter((data) => data.number % 2 === 0);
console.log(fruits3);

fruits4 = fruits.filter((data) => data.number <= 5);
console.log(fruits4);

// fruits1 = fruits.filter(data=>false)
// console.log(fruits1)

// fruits2 = fruits.filter(data=>true)
// console.log(fruits2)
