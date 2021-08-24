import LottoPresenter from "./lotto.presenter";
import { useState } from "react";
export default function LottoContainer() {
  const [numbers, setNumbers] = useState([0, 0, 0, 0, 0, 0]);

  function Wave() {
    let a = 0;
    const arr = [];

    for (let i = 0; i < numbers.length; i++) {
      a = parseInt(String(Math.random() * 45 + 1));
      arr.push(a);
    }
    setNumbers(arr);
  }

  return <LottoPresenter numbers={numbers} Wave={Wave} />;
}
