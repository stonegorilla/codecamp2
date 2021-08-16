import { useRouter } from "next/router";
import RandomAlgorithmPresenter from "./mainpage.presenter";

export default function RandomAlgorithmContainer() {
  const router = useRouter();

  function Lotto() {
    router.push(`/randomalgorithm/lotto`);
  }

  function Dices() {
    router.push(`/randomalgorithm/dices`);
  }
  function Automation() {
    router.push("/randomalgorithm/automation");
  }
  return (
    <RandomAlgorithmPresenter
      Lotto={Lotto}
      Dices={Dices}
      Automation={Automation}
    />
  );
}
