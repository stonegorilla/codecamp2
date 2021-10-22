import {
  Wrapper,
  ImgTitleWrapper,
  Title,
  LoginJoinWrapper,
  LogOutWrapper,
  ToLogin,
  ToJoin,
  PointCharge,
  BeLogOut,
  Picture,
  Img,
} from "./LayoutHeader.styles";
import { GlobalContext } from "../../../../../pages/_app";
import { useContext } from "react";

export default function LayoutHeaderUI(props) {
  const { accessToken } = useContext(GlobalContext);

  return (
    <Wrapper>
      <ImgTitleWrapper>
        <Img src="/header/jjanggu1.png" onClick={props.gotoMain} />
        <Title>짱구나라</Title>
      </ImgTitleWrapper>

      {!accessToken ? (
        <LoginJoinWrapper>
          <ToLogin onClick={props.gotoLogin}>로그인</ToLogin>
          <ToJoin onClick={props.gotoJoin}>회원가입</ToJoin>
        </LoginJoinWrapper>
      ) : (
        <LogOutWrapper>
          <Picture
            src={props.data?.fetchUserLoggedIn.picture || "/mypage/noimage.png"}
          />

          <PointCharge onClick={props.gotoCharge}>포인트충전</PointCharge>
          <BeLogOut onClick={props.onClickLogOut}>로그아웃</BeLogOut>
        </LogOutWrapper>
      )}
    </Wrapper>
  );
}
