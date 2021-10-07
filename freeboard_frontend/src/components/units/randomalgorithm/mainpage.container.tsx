import { useRouter } from "next/router";
import RandomAlgorithmPresenter from "./mainpage.presenter";

export default function RandomAlgorithmContainer() {
  const router = useRouter();

  function Randomnumber() {
    router.push(`/randomalgorithm/randomnumber`);
  }

  function Dices() {
    router.push(`/randomalgorithm/dices`);
  }
  function Automation() {
    router.push("/randomalgorithm/automation");
  }
  return (
    <RandomAlgorithmPresenter
      Randomnumber={Randomnumber}
      Dices={Dices}
      Automation={Automation}
    />
  );
}
