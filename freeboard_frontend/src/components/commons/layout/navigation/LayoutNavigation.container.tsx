import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  function gotoBoard() {
    router.push(`/boards`);
  }
  function gotoMarket() {
    router.push(`/market/list`);
  }
  function gotoMyPage() {
    router.push(`/mypage`);
  }
  function gotoRandomAlgorithm() {
    router.push(`/randomalgorithm`);
  }

  return (
    <LayoutNavigationUI
      gotoBoard={gotoBoard}
      gotoMarket={gotoMarket}
      gotoMyPage={gotoMyPage}
      gotoRandomAlgorithm={gotoRandomAlgorithm}
    />
  );
}
