import ResultPresenter from "./result.presenter";
import { useState } from "react";
export default function LottoContainer() {
  const [numbers, setNumbers] = useState([0, 0, 0, 0, 0, 0]);
  // 처음 숫자는 0,0,0,0,0,0 으로 맞춰준다. 이것을 배열로 해준다.
  // useState 내에 초기화된 값의 type은 바뀔 수 없다. 배열을 넣었으면 앞으로도
  // 배열을 넣어야 한다.

  function Wave() {
    let a = 0;
    const arr = [];

    for (let i = 0; i < numbers.length; i++) {
      a = Math.floor(Math.random() * 45 + 1);

      arr.push(a);
    }
    setNumbers(arr);
  }

  return <ResultPresenter numbers={numbers} Wave={Wave} />;
}
