import {
  Wrapper,
  Row,
  RowBold,
  B,
  ColumnPointDate,
  ColumnPointIdOrItem,
  ColumnPointAmount,
  ColumnPointBalance,
} from "./MyPoint.styles";
import { getDates } from "../../../../commons/libraries/utils";
export default function MyPointUI(props) {
  return (
    <Wrapper>
      {props.Loading && (
        <>
          <B style={{ color: "#000" }} onClick={props.ClickLoading}>
            충전내역
          </B>{" "}
          | <B onClick={props.ClickBuying}>구입내역</B> |{" "}
          <B onClick={props.ClickSelling}>판매내역</B>
          <RowBold>
            <ColumnPointDate>충전일</ColumnPointDate>
            <ColumnPointIdOrItem>결제ID</ColumnPointIdOrItem>
            <ColumnPointAmount>충전내역</ColumnPointAmount>
            <ColumnPointBalance>충전후잔액</ColumnPointBalance>
          </RowBold>
          {props.fetchpointtransactionsofloading?.fetchPointTransactionsOfLoading.map(
            (data) => (
              <Row key={data._id}>
                <ColumnPointDate>{getDates(data.createdAt)}</ColumnPointDate>
                <ColumnPointIdOrItem>{data.impUid}</ColumnPointIdOrItem>
                <ColumnPointAmount>{data.amount}</ColumnPointAmount>
                <ColumnPointBalance>{data.balance}</ColumnPointBalance>
              </Row>
            )
          )}
        </>
      )}
      {props.Buying && (
        <>
          <B onClick={props.ClickLoading}>충전내역</B> |{" "}
          <B style={{ color: "#000" }} onClick={props.ClickBuying}>
            구입내역
          </B>{" "}
          | <B onClick={props.ClickSelling}>판매내역</B>
          <RowBold>
            <ColumnPointDate>거래일</ColumnPointDate>
            <ColumnPointIdOrItem>제목</ColumnPointIdOrItem>
            <ColumnPointAmount>거래내역</ColumnPointAmount>
            <ColumnPointBalance>거래후잔액</ColumnPointBalance>
          </RowBold>
          {props.fetchpointtransactionsofbuying?.fetchPointTransactionsOfBuying.map(
            (data) => (
              <Row key={data._id}>
                <ColumnPointDate>{getDates(data.createdAt)}</ColumnPointDate>
                <ColumnPointIdOrItem>{data.useditem.name}</ColumnPointIdOrItem>
                <ColumnPointAmount>{data.amount}</ColumnPointAmount>
                <ColumnPointBalance>{data.balance}</ColumnPointBalance>
              </Row>
            )
          )}
        </>
      )}
      {props.Selling && (
        <>
          <B onClick={props.ClickLoading}>충전내역</B> |{" "}
          <B onClick={props.ClickBuying}>구입내역</B> |{" "}
          <B style={{ color: "#000" }} onClick={props.ClickSelling}>
            판매내역
          </B>
          <RowBold>
            <ColumnPointDate>거래일</ColumnPointDate>
            <ColumnPointIdOrItem>제목</ColumnPointIdOrItem>
            <ColumnPointAmount>거래내역</ColumnPointAmount>
            <ColumnPointBalance>거래후잔액</ColumnPointBalance>
          </RowBold>
          {props.fetchpointtransactionsofselling?.fetchPointTransactionsOfSelling.map(
            (data) => (
              <Row key={data._id}>
                <ColumnPointDate>{getDates(data.createdAt)}</ColumnPointDate>
                <ColumnPointIdOrItem>{data.useditem.name}</ColumnPointIdOrItem>
                <ColumnPointAmount>{data.amount}</ColumnPointAmount>
                <ColumnPointBalance>{data.balance}</ColumnPointBalance>
              </Row>
            )
          )}
        </>
      )}
    </Wrapper>
  );
}
