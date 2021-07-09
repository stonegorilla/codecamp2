function aaa(){
    console.log("안녕구세요")
}

// function aaa(a,b){
//     console.log("안녕이세요")
// }

function add(a,b){
    return a+b
}

aaa()
// aaa(1,2)

const bbb =1
const ccc = bbb

const qqq = "파인애플"
const www = qqq

const profile = {
    name : "철수",
    age : 13,
    school: "다람쥐초등학교"
}

const profile2 = profile
// 이렇게 하는 것은 어쩌면 profile을 profile2에 동기화 시키겠다라는 얘기
// 단순히 복사만 해줄 거면 profile3 과 profile4 처럼 해야 한다.
console.log(profile)
console.log(profile2)

profile2.name = "영희"

console.log(profile2)
console.log(profile)

const profile3 = {
    name : profile2.name,
    age : profile2.age,
    school : profile2.school
}

console.log(profile3)
profile3.name = "맹구"
console.log(profile3)
console.log(profile2)

const profile4 = {
    ...profile2
}

profile4.name = "짱구"
console.log(profile4)
console.log(profile2)

// ------------------------------------
