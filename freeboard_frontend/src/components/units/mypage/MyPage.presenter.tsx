import {
  Wrapper,
  WrapperLeft,
  Title,
  Picture,
  Point,
  Menu,
  WrapperRight,
  Row,
  ColumnIndex,
  ColumnTitle,
  ColumnIsSold,
  ColumnPrice,
  ColumnSeller,
  ColumnDate,
  ColumnPointDate,
  ColumnPointIdOrItem,
  ColumnPointAmount,
  ColumnPointBalance,
  Name,
} from "./MyPage.styles";
import { getDates } from "../../../commons/libraries/utils";
export default function MyPageUI(props) {
  return (
    <Wrapper>
      <WrapperLeft>
        <Title>Profile</Title>
        <Picture src={"/mypage/noimage.png"} />
        <Name>{props.data?.fetchUserLoggedIn.name}</Name>

        <Point>Point : {props.data?.fetchUserLoggedIn.userPoint.amount}</Point>
        <Menu onClick={props.charge}>내 장터</Menu>
        <Menu onClick={props.userchange}>내 포인트</Menu>
        <Menu onClick={props.changepassword}>프로필 변경</Menu>
      </WrapperLeft>
      <WrapperRight>
        나의상품
        <Row>
          <ColumnIndex>번호</ColumnIndex>
          <ColumnTitle>제목</ColumnTitle>
          <ColumnIsSold></ColumnIsSold>
          <ColumnPrice>판매가격</ColumnPrice>
          <ColumnSeller>판매자</ColumnSeller>
          <ColumnDate>날짜</ColumnDate>
        </Row>
        {props.fetchuseditemsisold?.fetchUseditemsISold.map((data, index) => (
          <Row key={data._id}>
            <ColumnIndex>{index}</ColumnIndex>
            <ColumnTitle>{data.name}</ColumnTitle>
            <ColumnIsSold>
              {data.soldAt ? "판매완료" : "안팔림..."}
            </ColumnIsSold>
            <ColumnPrice>{data.price}</ColumnPrice>
            <ColumnSeller>{data.seller.name}</ColumnSeller>
            <ColumnDate>{getDates(data.createdAt)}</ColumnDate>
          </Row>
        ))}
        마이찜
        <Row>
          <ColumnIndex>번호</ColumnIndex>
          <ColumnTitle>제목</ColumnTitle>
          <ColumnIsSold></ColumnIsSold>
          <ColumnPrice>판매가격</ColumnPrice>
          <ColumnSeller>판매자</ColumnSeller>
          <ColumnDate>날짜</ColumnDate>
        </Row>
        {props.fetchuseditemsipicked?.fetchUseditemsIPicked.map(
          (data, index) => (
            <Row key={data._id}>
              <ColumnIndex>{index}</ColumnIndex>
              <ColumnTitle>{data.name}</ColumnTitle>
              <ColumnIsSold>
                {data.soldAt ? "판매완료" : "안팔림..."}
              </ColumnIsSold>
              <ColumnPrice>{data.price}</ColumnPrice>
              <ColumnSeller>{data.seller.name}</ColumnSeller>
              <ColumnDate>{getDates(data.createdAt)}</ColumnDate>
            </Row>
          )
        )}
        구매목록
        <Row>
          <ColumnIndex>번호</ColumnIndex>
          <ColumnTitle>제목</ColumnTitle>
          <ColumnIsSold></ColumnIsSold>
          <ColumnPrice>판매가격</ColumnPrice>
          <ColumnSeller>판매자</ColumnSeller>
          <ColumnDate>날짜</ColumnDate>
        </Row>
        {props.fetchuseditemsibought?.fetchUseditemsIBought.map(
          (data, index) => (
            <Row key={data._id}>
              <ColumnIndex>{index}</ColumnIndex>
              <ColumnTitle>{data.name}</ColumnTitle>
              <ColumnIsSold>
                {data.soldAt ? "판매완료" : "안팔림..."}
              </ColumnIsSold>
              <ColumnPrice>{data.price}</ColumnPrice>
              <ColumnSeller>{data.buyer.name}</ColumnSeller>
              <ColumnDate>{getDates(data.createdAt)}</ColumnDate>
            </Row>
          )
        )}
        충전내역
        <Row>
          <ColumnPointDate>충전일</ColumnPointDate>
          <ColumnPointIdOrItem>결제ID</ColumnPointIdOrItem>
          <ColumnPointAmount>충전내역</ColumnPointAmount>
          <ColumnPointBalance>충전후잔액</ColumnPointBalance>
        </Row>
        {props.fetchpointtransactionsofloading?.fetchPointTransactionsOfLoading.map(
          (data, index) => (
            <Row key={data._id}>
              <ColumnPointDate>{getDates(data.createdAt)}</ColumnPointDate>
              <ColumnPointIdOrItem>{data.impUid}</ColumnPointIdOrItem>
              <ColumnPointAmount>{data.amount}</ColumnPointAmount>
              <ColumnPointBalance>{data.balance}</ColumnPointBalance>
            </Row>
          )
        )}
        구입내역
        <Row>
          <ColumnPointDate>거래일</ColumnPointDate>
          <ColumnPointIdOrItem>제목</ColumnPointIdOrItem>
          <ColumnPointAmount>거래내역</ColumnPointAmount>
          <ColumnPointBalance>거래후잔액</ColumnPointBalance>
        </Row>
        {props.fetchpointtransactionsofbuying?.fetchPointTransactionsOfBuying.map(
          (data, index) => (
            <Row key={data._id}>
              <ColumnPointDate>{getDates(data.createdAt)}</ColumnPointDate>
              <ColumnPointIdOrItem>{data.useditem.name}</ColumnPointIdOrItem>
              <ColumnPointAmount>{data.amount}</ColumnPointAmount>
              <ColumnPointBalance>{data.balance}</ColumnPointBalance>
            </Row>
          )
        )}
        판매내역
        <Row>
          <ColumnPointDate>거래일</ColumnPointDate>
          <ColumnPointIdOrItem>제목</ColumnPointIdOrItem>
          <ColumnPointAmount>거래내역</ColumnPointAmount>
          <ColumnPointBalance>거래후잔액</ColumnPointBalance>
        </Row>
        {props.fetchpointtransactionsofselling?.fetchPointTransactionsOfSelling.map(
          (data, index) => (
            <Row key={data._id}>
              <ColumnPointDate>{getDates(data.createdAt)}</ColumnPointDate>
              <ColumnPointIdOrItem>{data.useditem.name}</ColumnPointIdOrItem>
              <ColumnPointAmount>{data.amount}</ColumnPointAmount>
              <ColumnPointBalance>{data.balance}</ColumnPointBalance>
            </Row>
          )
        )}
      </WrapperRight>
    </Wrapper>
  );
}
