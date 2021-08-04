import {
  Wrapper,
  LoginJoinWrapper,
  ToLogin,
  ToJoin,
  Img,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  return (
    <Wrapper>
      <Img src="/header/jjanggu1.png" onClick={props.gotoMain} />
      <LoginJoinWrapper>
        <ToLogin onClick={props.gotoLogin}>로그인</ToLogin>
        <ToJoin onClick={props.gotoJoin}>회원가입</ToJoin>
      </LoginJoinWrapper>
    </Wrapper>
  );
}
