const inputs = {
        writer : "철수",
        password: "1234",
        title: "제목입니다",
        contents: "내용입니다."

    }

// dictionary라고 하지 않고 객체라고 한다.
// python에서는 dictionary 라고 한다.

console.log(inputs.writer)
console.log(inputs.password)
console.log(inputs.title)
console.log(inputs.contents)
// 다음과 같이 접근연산자 . 을 이용해 key 값에 대한 value 값을 가져올 수 있다.
// python 에서는 inputs.writer 가 아닌 inputs["writer"] 방식으로 불러온다. (inputs.writer 방식으로 안가져왔던듯)