import {
  Wrapper,
  Title,
  LoginJoinWrapper,
  LogOutWrapper,
  ToLogin,
  ToJoin,
  BeLogOut,
  Img,
} from "./LayoutHeader.styles";
import { GlobalContext } from "../../../../../pages/_app";
import { useContext } from "react";
export default function LayoutHeaderUI(props) {
  const { accessToken } = useContext(GlobalContext);
  return (
    <Wrapper>
      <Img src="/header/jjanggu1.png" onClick={props.gotoMain} />
      <Title>짱구나라</Title>
      {!accessToken ? (
        <LoginJoinWrapper>
          <ToLogin onClick={props.gotoLogin}>로그인</ToLogin>
          <ToJoin onClick={props.gotoJoin}>회원가입</ToJoin>
        </LoginJoinWrapper>
      ) : (
        <LogOutWrapper>
          <BeLogOut onClick={props.onClickLogOut}>로그아웃</BeLogOut>
        </LogOutWrapper>
      )}
    </Wrapper>
  );
}
