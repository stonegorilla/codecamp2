import { useRouter } from "next/router";
import RandomAlgorithmPresenter from "./dices.presenter";

export default function RandomAlgorithmContainer() {
  const router = useRouter();

  function Lotto() {
    router.push(`/randomalgorithm/lotto`);
  }

  function Dices() {
    router.push(`/randomalgorithm/dices`);
  }
  return <RandomAlgorithmPresenter Lotto={Lotto} Dices={Dices} />;
}
