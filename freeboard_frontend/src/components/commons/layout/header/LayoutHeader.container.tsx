import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useContext } from "react";
import { LOGOUT_USER } from "./LayoutHeader.queries";
import { GlobalContext } from "../../../../../pages/_app";
import { useMutation } from "@apollo/client";
export default function LayoutFooter() {
  const { userInfo, setUserInfo, setAccessToken } = useContext(GlobalContext);
  const router = useRouter();
  const [logoutUser] = useMutation(LOGOUT_USER);
  function gotoMain() {
    router.push("/boards");
  }
  function gotoLogin() {
    router.push("/market/login");
  }
  function gotoJoin() {
    router.push("/market/join");
  }
  const onClickLogOut = () => {
    logoutUser();
    setAccessToken("");
    setUserInfo({});
    localStorage.setItem("refreshToken", "");
  };
  return (
    <LayoutHeaderUI
      gotoMain={gotoMain}
      gotoLogin={gotoLogin}
      gotoJoin={gotoJoin}
      onClickLogOut={onClickLogOut}
    />
  );
}
