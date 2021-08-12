import MarketCommentListUIItem from "./MarketCommentAnswerList.presenterItem";
import {
  Row,
  Column,
  MarketCommentList,
} from "./MarketCommentAnswerList.styles";

export default function MarketCommentAnswerListUI(props) {
  return (
    <>
      <MarketCommentList>
        <Row>
          <Column>아이디</Column>
          <Column>작성자</Column>
          <Column>내용</Column>
          <Column>에디트</Column>
          <Column>딜리트</Column>
          <Column>리댓</Column>
        </Row>
        {props.commentdata?.fetchUseditemQuestionAnswers.map((data, index) => (
          <MarketCommentListUIItem key={data._id} data={data} />
        ))}
      </MarketCommentList>
    </>
  );
}
