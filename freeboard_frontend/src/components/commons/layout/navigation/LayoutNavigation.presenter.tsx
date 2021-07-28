import { Wrapper, Menu, MenuWrapper } from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(props) {
  return (
    <Wrapper>
      <MenuWrapper>
        <Menu onClick={props.gotoBoard}>자유게시판</Menu>
        <Menu onClick={props.gotoMarket}>중고마켓</Menu>
        <Menu onClick={props.gotoMyPage}>마이페이지</Menu>
        <Menu onClick={props.gotoRandomAlgorithm}>랜덤알고리즘</Menu>
        <Menu>데이터베이스</Menu>
      </MenuWrapper>
    </Wrapper>
  );
}
