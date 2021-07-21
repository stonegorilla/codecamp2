import {
  Wrapper,
  Writer,
  Date,
  Hr,
  Title,
  MainPicture,
  Contents,
  Video,
  VideoWrapper,
  LikeDislikeCenterWrapper,
  LikeDislikeWrapper,
  LikeWrapper,
  Like,
  LikeNumber,
  DisLikeWrapper,
  Dislike,
  DislikeNumber,
  ButtonGrayWrapper,
  ButtonGray,
  BoardCommentWrapper,
  BoardCommentWriter,
  BoardCommentContents,
  BoardCommentUpdateWriter,
  BoardCommentUpdateContents,
  BoardCommentButton,
  BoardCommentList,
  Row,
  Column,
} from "./BoardDetail.styles";
import { Modal } from "antd";

export default function BoardDetailUI(props) {
  //   const video = props.qqq ? props.qqq.fetchBoard.youtubeUrl : "333 ";

  return (
    <>
      <Modal
        title="게시글 삭제"
        visible={props.isOpen}
        onOk={props.onClose}
        onCancel={props.onClose}
      >
        <div>게시물이 정상적으로 삭제되었습니다.</div>
      </Modal>
      <Wrapper>
        <Writer>{props.qqq ? props.qqq.fetchBoard.writer : "111"}</Writer>
        <Date>12121</Date>
        <Hr></Hr>
        <Title>{props.qqq ? props.qqq.fetchBoard.title : "222"}</Title>
        <MainPicture></MainPicture>
        <Contents>{props.qqq ? props.qqq.fetchBoard.contents : "333"}</Contents>
        <VideoWrapper>
          <Video url={[props.video]}></Video>
        </VideoWrapper>

        <LikeDislikeCenterWrapper>
          <LikeDislikeWrapper>
            <LikeWrapper>
              <Like onClick={props.LikeUp}></Like>
              <LikeNumber>
                {props.qqq ? props.qqq.fetchBoard.likeCount : 400}
              </LikeNumber>
            </LikeWrapper>
            <DisLikeWrapper>
              <Dislike onClick={props.DislikeUp}></Dislike>
              <DislikeNumber>
                {props.qqq ? props.qqq.fetchBoard.dislikeCount : 500}
              </DislikeNumber>
            </DisLikeWrapper>
          </LikeDislikeWrapper>
        </LikeDislikeCenterWrapper>
      </Wrapper>
      <ButtonGrayWrapper>
        <ButtonGray onClick={props.gotoList}>목록으로</ButtonGray>
        <ButtonGray onClick={props.gotoEdit}>수정하기</ButtonGray>
        <ButtonGray onClick={props.onClickDelete}>삭제하기</ButtonGray>
      </ButtonGrayWrapper>
      <hr />

      <BoardCommentWrapper>
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
      </BoardCommentWrapper>
    </>
  );
}
