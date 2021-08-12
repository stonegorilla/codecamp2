import {
  BoardCommentWrapper,
  BoardCommentWriter,
  BoardCommentContents,
  BoardCommentButton,
  BoardCommentUpdateWriter,
  BoardCommentUpdateContents,
} from "./MarketCommentAnswerWrite.styles";

export default function MarketCommentAnswerWriteUI(props) {
  return (
    <BoardCommentWrapper>
      {!props.isEdit && (
        <>
          <BoardCommentContents
            name="contents"
            placeholder="내용22"
            onChange={props.onChangeComments}
          ></BoardCommentContents>
          <BoardCommentButton onClick={props.onCommentSubmit}>
            등록하기
          </BoardCommentButton>
        </>
      )}
      {props.isEdit && (
        <>
          <BoardCommentUpdateContents
            name="contents"
            placeholder="수정내용"
            onChange={props.onChangeComments}
          ></BoardCommentUpdateContents>
          <BoardCommentButton onClick={props.onCommentEdit}>
            수정하기
          </BoardCommentButton>
          {/* <BoardCommentList></BoardCommentList> */}
        </>
      )}
    </BoardCommentWrapper>
  );
}
