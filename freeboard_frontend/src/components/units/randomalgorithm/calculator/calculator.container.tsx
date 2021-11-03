import { useState } from "react";
import CalculatorPresenter from "./calculator.presenter";

export default function CalculatorContainer() {
  const [inputstate, setInputState] = useState("");

  const addToInput = (num) => () => {
    setInputState(inputstate + num);
  };

  const calculateResult = () => {
    try {
      setInputState(eval(inputstate));
    } catch (error) {
      setInputState("error");
    }
  };
  return (
    <CalculatorPresenter
      addToInput={addToInput}
      setInputState={setInputState}
      inputstate={inputstate}
      calculateResult={calculateResult}
    />
  );
}
