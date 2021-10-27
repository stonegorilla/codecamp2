import { useRouter } from "next/router";
import BeforeChessUI from "./BeforeChess.presenter";

export default function BeforeChess() {
  const router = useRouter();
  function gotoChessPlay() {
    router.push("/randomalgorithm/beforechess/chess");
  }
  return <BeforeChessUI gotoChessPlay={gotoChessPlay} />;
}
