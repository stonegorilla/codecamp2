const profiles = [
  { id: 1, name: "철수", age: 13, school: "다람쥐초등학교" },
  { id: 2, name: "영희", age: 16, school: "토끼초등학교" },
  { id: 3, name: "훈이", age: 14, school: "훈놈초등학교" },
];

const profiles2 = {};

profiles3 = profiles.map((data) => ({
  name: data.name,
  age: data.age,
  school: data.school,
}));

console.log(profiles3);
