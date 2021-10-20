import {
  Wrapper,
  WrapperLeft,
  Title,
  Picture,
  Point,
  Menu01,
  Menu02,
  Menu03,
  Name,
} from "./MyPage.styles";

export default function MyPageUI(props) {
  return (
    <Wrapper>
      <WrapperLeft>
        <Title>Profile</Title>
        <Picture
          src={props.data?.fetchUserLoggedIn.picture || "/mypage/noimage.png"}
        />
        <Name>{props.data?.fetchUserLoggedIn.name}</Name>

        <Point>Point : {props.data?.fetchUserLoggedIn.userPoint.amount}</Point>
        <Menu01
          // @ts-ignore
          isActive01={props.isActive01}
          onClick={props.onClickMyItem}
        >
          내 장터
        </Menu01>
        <Menu02
          // @ts-ignore
          isActive02={props.isActive02}
          onClick={props.onClickMyPoint}
        >
          내 포인트
        </Menu02>
        <Menu03
          // @ts-ignore
          isActive03={props.isActive03}
          onClick={props.onClickMyProfile}
        >
          상세 프로필
        </Menu03>
      </WrapperLeft>
    </Wrapper>
  );
}
