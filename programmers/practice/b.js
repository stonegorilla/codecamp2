console.log(typeof(p))

// 여기서 . 은 console 내 메서드 혹은 변수에 접근하는 접근연산자이다. ㅋㅋㅎㅎㅎ
// class 내에 종속적인 함수를 메서드 라고 하기도 하는데 ...
const product = {
    name : "키보드",
    price : 10000,
    size : {
        width : 100,
        height : 200,

    }
}
JSON.stringify(product)
// product를 JSON 문자열로 바꿔주는 것이다. 그렇게 되면 product의 어떤 요소도 다른 것과 연동 되지 않는다.
console.log(typeof(product))
// JSON 문자열의 타입은 object로 나올 것이다. 그냥 일반 문자열의 타입은 string 으로 나온다.
let product2 =JSON.parse(JSON.stringify(product))
console.log(product2)
product2.size.width = 100000
console.log(product2)
console.log(typeof(product2))



console.log(product)
console.log(product2)

product2.size.width = 50


JSON.parse(JSON.stringify(product))

console.log(product)
console.log(product2)