function makeNumber(num) {
    let str = []
    for (let i=1; i<=num; i++) {
        str.push(i)


    }
    str = str.join("-")
    console.log(str)
  }

  makeNumber(1)
  makeNumber(5)
  makeNumber(13)
