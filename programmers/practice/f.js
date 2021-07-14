// const inputs = {
//     writer : "철수",
//     password: "1234",
//     title: "제목입니다",
//     contents: "내용입니다."
// }

// console.log(inputs)


// const inputs2 = {
//     writer : "철수",
//     password: "1234",
//     title: "제목입니다",
//     contents: "내용입니다.",
//     password: "1wee"
// }
// console.log(inputs2)

// const classmates = [
//     "철수",
//     "영희",
//     "훈이"
// ]

// let a = classmates.every(data => true)
// console.log(a)

const aaa = ["철수","1234","제목입니다.","내용입니다."]
const bbb = aaa.every(data => data !== "")
console.log(bbb)
const inputs = {
    name : "철수",
    password : "1234",
    title : "제목입니다~",
    contents : "내용입니다."
}
console.log(Object.keys(inputs))
console.log(Object.values(inputs).every(data => data !==""))
