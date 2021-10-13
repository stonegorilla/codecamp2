import {
  Wrapper,
  Row,
  RowBold,
  B,
  ColumnIndex,
  ColumnTitle,
  ColumnIsSold,
  ColumnPrice,
  ColumnSeller,
  ColumnDate,
} from "./SellingItem.styles";
import { getDates } from "../../../../commons/libraries/utils";
export default function SellingItemUI(props) {
  return (
    <Wrapper>
      {props.ISold && (
        <>
          <B style={{ color: "#000" }} onClick={props.ClickISold}>
            나의상품
          </B>{" "}
          | <B onClick={props.ClickIPicked}>마이찜</B> |{" "}
          <B onClick={props.ClickIBought}>구매목록</B>
          <RowBold>
            <ColumnIndex>번호</ColumnIndex>
            <ColumnTitle>제목</ColumnTitle>
            <ColumnIsSold style={{ color: " black" }}>판매여부</ColumnIsSold>
            <ColumnPrice>판매가격</ColumnPrice>
            <ColumnSeller>판매자</ColumnSeller>
            <ColumnDate>날짜</ColumnDate>
          </RowBold>
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
        </>
      )}
      {props.IPicked && (
        <>
          <B onClick={props.ClickISold}>나의상품</B> |{" "}
          <B style={{ color: "#000" }} onClick={props.ClickIPicked}>
            마이찜
          </B>{" "}
          | <B onClick={props.ClickIBought}>구매목록</B>
          <RowBold>
            <ColumnIndex>번호</ColumnIndex>
            <ColumnTitle>제목</ColumnTitle>
            <ColumnIsSold style={{ color: "black" }}>판매여부</ColumnIsSold>
            <ColumnPrice>판매가격</ColumnPrice>
            <ColumnSeller>판매자</ColumnSeller>
            <ColumnDate>날짜</ColumnDate>
          </RowBold>
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
        </>
      )}
      {props.IBought && (
        <>
          <B onClick={props.ClickISold}>나의상품</B> |{" "}
          <B onClick={props.ClickIPicked}>마이찜</B> |{" "}
          <B style={{ color: "#000" }} onClick={props.ClickIBought}>
            구매목록
          </B>
          <RowBold>
            <ColumnIndex>번호</ColumnIndex>
            <ColumnTitle>제목</ColumnTitle>
            <ColumnIsSold style={{ color: "black" }}>판매여부</ColumnIsSold>
            <ColumnPrice>판매가격</ColumnPrice>
            <ColumnSeller>판매자</ColumnSeller>
            <ColumnDate>날짜</ColumnDate>
          </RowBold>
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
        </>
      )}
    </Wrapper>
  );
}
