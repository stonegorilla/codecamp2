import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useContext } from "react";
import { LOGOUT_USER, FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";
import { GlobalContext } from "../../../../../pages/_app";
import { useMutation, useQuery } from "@apollo/client";

export default function LayoutFooter() {
  const { setUserInfo, setAccessToken } = useContext(GlobalContext);
  const router = useRouter();
  const [logoutUser] = useMutation(LOGOUT_USER);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  function gotoMain() {
    router.push("/");
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
      data={data}
      gotoMain={gotoMain}
      gotoLogin={gotoLogin}
      gotoJoin={gotoJoin}
      onClickLogOut={onClickLogOut}
    />
  );
}
