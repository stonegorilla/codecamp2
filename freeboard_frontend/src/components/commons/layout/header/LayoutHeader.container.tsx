import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutFooter() {
  const router = useRouter();

  function gotoMain() {
    router.push("/boards");
  }
  function gotoLogin() {
    router.push("/market/login");
  }
  function gotoJoin() {
    router.push("/market/join");
  }
  return (
    <LayoutHeaderUI
      gotoMain={gotoMain}
      gotoLogin={gotoLogin}
      gotoJoin={gotoJoin}
    />
  );
}
