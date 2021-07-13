// const child = {
//     names : "철수",
//     age : 13,
//     school : "다람쥐초등학교"
// }

// const {names, age, school} = child
// const names = child.name
// const age = child.age
// const school = child.school

// console.log(names)

// const {name2, age2, school2} = {
//     name2 : "철수",
//     age2 : 13,
//     school2 : "다람쥐초등학교"
// }

// console.log(name2, age2, school2)

// const numbers = [10,15]
// const number1 = numbers[0]
// const number2 = numbers[1]
// console.log(number1)
// console.log(number2)

// const [number111, number222] = [10,15]
// console.log(number111)
// console.log(number222)

// function useQuery(){

//     const aaa = "이것은 데이터입니다~"
//     return {
//         data: aaa
//     }
// }

// console.log(useQuery())

// const {data} = useQuery()
// console.log(data)
// console.log(typeof(data))

// function useState() {
//     const aaa = 3

//     return ["컴포넌트에서 쓰이는 변수","변경시키는 함수"]
//     // [변수,함수]

// }

// const [aaa, setAaa] = useState() // => 리턴이 배열
// console.log(aaa)
// console.log(setAaa)

// const child = {
//     names : "영희",
//     age : 7,
//     school : "토끼초등학교"
// }

// const {age} = child
// // 리턴이 딕셔너리??
// console.log(age)

// function getChild(){
//     return {
//         name2 : "철수",
//         age2 : 13,
//         school2 : "다람쥐초등학교"
//     }
// }

// const {age2} = getChild()
// console.log(age2)

//참고로 비구조화 할당, 구조분해 할당 같은 말임

// function getClassmates(){
//     return ["철수","영희"]
// }

// const [child1, child2] = getClassmates()
// console.log(child1)
// console.log(child2)
// 비구조화 할당은 C언어 같은데선 지원을 하는가?? 흠...
function getClassmates(mate1,mate2){
    return [mate1,mate2]
}
const [child3,child4] = getClassmates("맹구","훈이")
console.log(child3)
console.log(child4)

// function getClassmates(aaa, ccc){
//     console.log("aaa는"+ aaa+ "입니다.")
//     console.log("ccc는"+ccc+"입니다.")

// }

// getClassmates("맹구","훈이")

//비구조화 할당 팁 , 같은 배열, 같은 딕셔너리? 만들어주기
// 비구조화 할당은 아마 그냥 한줄에 변수 선언 하고 싶어서 만들었을 것으로 추정된다. ㅋㅋㅋ

// 강사님의 하드코딩 의미와 내가 생각하던 하드코딩의 의미가 다르다.