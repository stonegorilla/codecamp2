import {
  BoardCommentWrapper,
  BoardCommentContents,
  BoardCommentButton,
  BoardCommentUpdateContents,
} from "./MarketCommentWrite.styles";

export default function MarketCommentWriteUI(props) {
  return (
    <BoardCommentWrapper>
      {!props.isEdit && (
        <>
          <BoardCommentContents
            name="contents"
            placeholder="내용"
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
            placeholder="이랴이랴"
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
