import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import { Row, Column, BoardCommentList } from "./BoardCommentList.styles";

export default function BoardCommentListUI(props) {
  return (
    <>
      <BoardCommentList></BoardCommentList>
      <Row>
        <Column>아이디</Column>
        <Column>작성자</Column>
        <Column>내용</Column>
        <Column>레이팅</Column>
        <Column>에디트</Column>
      </Row>
      {props.commentdata?.fetchBoardComments.map((data, index) => (
        <BoardCommentListUIItem key={data._id} data={data} />
      ))}
    </>
  );
}
