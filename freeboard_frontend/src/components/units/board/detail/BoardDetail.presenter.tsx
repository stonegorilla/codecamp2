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
  AvatarWrapper,
  Avatar,
  Info,
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
        <AvatarWrapper>
          <Avatar src="/boardpage/avatar.png" />
          <Info>
            <Writer>{props.qqq ? props.qqq.fetchBoard.writer : "111"}</Writer>
            <Date>{props.qqqq ? props.qqq.fetchBoard.createdAt : "12121"}</Date>
          </Info>
        </AvatarWrapper>

        <Hr></Hr>
        <Title>{props.qqq ? props.qqq.fetchBoard.title : "222"}</Title>
        <MainPicture src={props.imgUrl}></MainPicture>

        {props.qqq?.fetchBoard.images?.map((data: string) => (
          <MainPicture
            key={data}
            src={`https://storage.googleapis.com/${data}`}
          ></MainPicture>
        ))}

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
