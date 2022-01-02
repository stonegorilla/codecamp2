function solution(name) {
  let answerupdown = 0;
  let answerrightfirst = name.length - 1;
  let answerleftfirst = name.length - 1;
  let dictarr = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 12,
    P: 11,
    Q: 10,
    R: 9,
    S: 8,
    T: 7,
    U: 6,
    V: 5,
    W: 4,
    X: 3,
    Y: 2,
    Z: 1,
  };

  let apositive = 0;
  let anegative = 0;
  const Aarray = [];
  let start = 0;
  let end = 0;
  let temp = 0;
  // for (let i = 1; name[i] === "A" && i < name.length; i++) apositive += 1;
  // for (let i = 1; name[name.length - i] === "A" && i < name.length; i++)
  //   anegative += 1;

  for (let i = 1; i < name.length; i++) {
    if (name[i] === "A" && temp === 0) {
      start = i;
      temp++;
    }

    if (name[i] !== "A" && temp !== 0) {
      end = i - 1;
      temp = 0;
      Aarray.push([start, end]);
    }

    if (name[i] === "A" && i === name.length - 1) {
      end = i;
      temp = 0;
      Aarray.push([start, end]);
    }
  }
  console.log(Aarray);

  for (let i = 0; i < Aarray.length; i++) {
    answerrightfirst = Math.min(
      answerrightfirst,
      Aarray[i][0] - 1 + name.length - 2 - (Aarray[i][1] - Aarray[i][0])
    );
  }

  for (let i = 0; i < Aarray.length; i++) {
    answerleftfirst = Math.min(
      answerleftfirst,
      name.length -
        1 -
        Aarray[i][1] +
        name.length -
        2 -
        (Aarray[i][1] - Aarray[i][0])
    );
  }

  console.log(answerrightfirst, answerleftfirst);
  // 위 아래 누르는 총 횟수
  for (let i = 0; i < name.length; i++) {
    answerupdown += dictarr[name[i]];

    console.log(dictarr[name[i]]);
  }

  return answerupdown + Math.min(answerrightfirst, answerleftfirst);
}

solution("JAB");
