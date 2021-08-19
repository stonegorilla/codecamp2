import MarketCommentListUIItem from "./MarketCommentList.presenterItem";
import { Row, Column, MarketCommentList } from "./MarketCommentList.styles";

export default function MarketCommentListUI(props) {
  return (
    <>
      <MarketCommentList>
        <Row>
          <Column>작성자</Column>
          <Column>내용</Column>

          <Column>버튼모음</Column>
        </Row>
        {props.commentdata?.fetchUseditemQuestions.map((data, index) => (
          <MarketCommentListUIItem key={data._id} data={data} />
        ))}
      </MarketCommentList>
    </>
  );
}
