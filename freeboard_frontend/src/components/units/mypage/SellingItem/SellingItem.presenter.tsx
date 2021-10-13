
import {Wrapper,Row,ColumnIndex,ColumnTitle,ColumnIsSold,ColumnPrice,ColumnSeller,ColumnDate } from './SellingItem.styles'
import { getDates } from "../../../../commons/libraries/utils";
export default function SellingItemUI(props){
    return (
        <Wrapper>
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
        </Wrapper>

    )
}