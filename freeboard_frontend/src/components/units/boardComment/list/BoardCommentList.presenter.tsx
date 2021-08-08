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
        <Row key={data._id}>
          <Column>{data._id}</Column>
          <Column>{data.writer}</Column>
          <Column>{data.contents}</Column>
          <Column>{data.rating}</Column>
          <Column>
            <button
              name="commentid"
              value={data._id}
              onClick={props.onChangeComments}
            >
              에디트
            </button>
          </Column>
          <Column>
            <button
              name="commentid"
              value={data._id}
              onClick={props.onCommentDelete}
            >
              딜리트
            </button>
          </Column>
        </Row>
      ))}
    </>
  );
}
