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
        <MainPicture src={props.imgUrl}></MainPicture>

        <MainPicture
          src={`https://storage.googleapis.com/${props.qqq?.fetchBoard.images[0]}`}
        ></MainPicture>
        <MainPicture
          src={`https://storage.googleapis.com/${props.qqq?.fetchBoard.images[1]}`}
        ></MainPicture>
        <MainPicture
          src={`https://storage.googleapis.com/${props.qqq?.fetchBoard.images[2]}`}
        ></MainPicture>
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
    </>
  );
}
