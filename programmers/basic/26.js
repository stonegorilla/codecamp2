function makeOdd(num) {
    let str = []
    for (let i=0; i<=num; i++) {
      if(i%2 === 1){
        str.push(i)
      }else{}
    }
    str = str.join("")
    console.log(str)
  }

  makeOdd(4)
  makeOdd(5)
  makeOdd(6)
  makeOdd(25)

  // 홀짝 하기는 뭐 문자개수에 따라 점수를 준다거나, 뭐 이런거
  // 홀짝은 자리배치 하는 것 뭐 이런 것 ㅎㅎ