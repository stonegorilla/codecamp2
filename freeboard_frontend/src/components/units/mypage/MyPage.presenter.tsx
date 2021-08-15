import {
  Wrapper,
  WrapperLeft,
  WrapperRight,
  Row,
  ColumnIndex,
  ColumnTitle,
  ColumnIsSold,
  ColumnPrice,
  ColumnSeller,
  ColumnDate,
} from "./MyPage.styles";

export default function MyPageUI(props) {
  return (
    <Wrapper>
      <WrapperLeft>
        <div>{props.data?.fetchUserLoggedIn.userPoint.amount}</div>
        <div onClick={props.charge}>충전하세요</div>
      </WrapperLeft>
      <WrapperRight>
        <Row>
          <ColumnIndex>번호</ColumnIndex>
          <ColumnTitle>제목</ColumnTitle>
          <ColumnIsSold></ColumnIsSold>
          <ColumnPrice>판매가격</ColumnPrice>
          <ColumnSeller>판매자</ColumnSeller>
          <ColumnDate>날짜</ColumnDate>
        </Row>
        <Row>
          <ColumnIndex>1</ColumnIndex>
          <ColumnTitle>게시물제목입니다.</ColumnTitle>
          <ColumnIsSold>판매완료</ColumnIsSold>
          <ColumnPrice>판매가격</ColumnPrice>
          <ColumnSeller>판매자</ColumnSeller>
          <ColumnDate>날짜</ColumnDate>
        </Row>
      </WrapperRight>
    </Wrapper>
  );
}
