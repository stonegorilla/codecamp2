import { useRouter } from "next/router";
import CalculatorPresenter from "./calculator.presenter";

export default function CalculatorContainer() {
  const router = useRouter();

  function Lotto() {
    router.push(`/randomalgorithm/lotto`);
  }

  function Dices() {
    router.push(`/randomalgorithm/dices`);
  }
  return <CalculatorPresenter Lotto={Lotto} Dices={Dices} />;
}
