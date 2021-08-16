function aaa(qqq) {
    console.log("안녕하세요")
    qqq()
}

aaa(function(){console.log("12345")})
// aaa 안의 함수 같은 것을 callback 함수
// 나중에 요청하면 실행되는 함수

aaa(() =>{console.log("12345")})

//map((aaa) =>{aaa+"어린이"}).filter((bbb))

console.log(["철수","영희","훈이"].map((data)=>data+"어린이"))
console.log(["철수","영희","훈이"].map(function(data) {return data+"어린이"}))

