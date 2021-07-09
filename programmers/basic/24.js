function countLetter(str){
    let count = 0;
    for(let i=0; i<str.length; i++) {
        if(str[i] === "a"){
            count += 1
        }else{}
    }
    console.log(count)
}

countLetter("I'm from korea")
countLetter("aaaaaaaa aaaaaa")
countLetter("Jesus Christ")
countLetter("apple watch 좋아요")
countLetter("AaAa")

// 이런 것 막 문자분석 같은 것 할때 되게 좋을듯?
// 예를 들어 성경에 각 알파벳들이 몇번이나 나오는지 이런 것들
// 언어 연구실 이런데서 쓰면 괜찮을 듯