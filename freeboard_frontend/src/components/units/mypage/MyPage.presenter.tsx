import { Wrapper } from "./MyPage.styles";

export default function MyPageUI(props) {
  return (
    <>
      <Wrapper>
        <div>{props.data?.fetchUserLoggedIn.userPoint.amount}</div>
        <div onClick={props.charge}>충전하세요</div>
      </Wrapper>
    </>
  );
}
