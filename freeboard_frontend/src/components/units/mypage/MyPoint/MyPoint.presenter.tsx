import {Wrapper, Row, ColumnPointDate,ColumnPointIdOrItem,ColumnPointAmount,ColumnPointBalance} from './MyPoint.styles'
import { getDates } from "../../../../commons/libraries/utils";
export default function MyPointUI(props){

    return (
    <Wrapper>
        충전내역
        <Row>
          <ColumnPointDate>충전일</ColumnPointDate>
          <ColumnPointIdOrItem>결제ID</ColumnPointIdOrItem>
          <ColumnPointAmount>충전내역</ColumnPointAmount>
          <ColumnPointBalance>충전후잔액</ColumnPointBalance>
        </Row>
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
        구입내역
        <Row>
          <ColumnPointDate>거래일</ColumnPointDate>
          <ColumnPointIdOrItem>제목</ColumnPointIdOrItem>
          <ColumnPointAmount>거래내역</ColumnPointAmount>
          <ColumnPointBalance>거래후잔액</ColumnPointBalance>
        </Row>
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
        판매내역
        <Row>
          <ColumnPointDate>거래일</ColumnPointDate>
          <ColumnPointIdOrItem>제목</ColumnPointIdOrItem>
          <ColumnPointAmount>거래내역</ColumnPointAmount>
          <ColumnPointBalance>거래후잔액</ColumnPointBalance>
        </Row>
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

    </Wrapper>
    
    )
}