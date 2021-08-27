import LottoPresenter from "./lotto.presenter";
import { useState } from "react";
export default function LottoContainer() {
  const [numbers, setNumbers] = useState([0, 0, 0, 0, 0, 0]);
  // 처음 숫자는 0,0,0,0,0,0 으로 맞춰준다. 이것을 배열로 해준다.
  // useState 내에 초기화된 값의 type은 바뀔 수 없다. 배열을 넣었으면 앞으로도
  // 배열을 넣어야 한다.

  function Wave() {
    let a = 0; // 랜덤값을 하나씩 넣기 위해 a라는 매개체를 쓰겠다.
    const arr = [];

    for (let i = 0; i < numbers.length; i++) {
      a = Math.floor(Math.random() * 45 + 1); //0부터 45까지 랜덤값
      // Math.random() 은 0부터 1까지의 랜덤값을 리턴시킨다.
      // 그리고 Math.floor 는 소수점이하를 버림하는 기능이다.
      // parseInt(String(Math.random()*45+1)) 해도 먹긴 먹는다.
      // 하지만, MDN 파일에선 소수점버리는 용도로 parseInt 는 쓰지 말라고 하니 ...

      arr.push(a);
    }
    setNumbers(arr); // 그리고 새로운 랜덤값 배열을 numbers에 넣어준다.
    // 그리고 다시 렌더링 시킨다.
    // 렌더링이란, return 하는 것들을 화면에 보여주는 것이다.
  }

  return <LottoPresenter numbers={numbers} Wave={Wave} />;
}
