import {
  BoardCommentWrapper,
  BoardCommentWriter,
  BoardCommentContents,
  BoardCommentButton,
  BoardCommentUpdateWriter,
  BoardCommentUpdateContents,
} from "./BoardCommentWrite.styles";

export default function BoardCommentWriteUI(props) {
  return (
    <BoardCommentWrapper>
      {!props.isEdit && (
        <>
          <BoardCommentWriter
            name="writer"
            placeholder="작성자"
            onChange={props.onChangeComments}
          ></BoardCommentWriter>
          <BoardCommentWriter
            name="password"
            placeholder="비번"
            onChange={props.onChangeComments}
          ></BoardCommentWriter>
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
          <BoardCommentUpdateWriter
            name="writer"
            onChange={props.onChangeComments}
          ></BoardCommentUpdateWriter>
          <BoardCommentUpdateContents
            name="contents"
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
