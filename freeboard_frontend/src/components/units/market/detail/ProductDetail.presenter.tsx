import {
  Wrapper,
  AvatarWrapper,
  Avatar,
  Info,
  Seller,
  Date,
  Hr,
  NameRemarksWrapper,
  Remarks,
  Name,
  Price,
  Contents,
  NameRemarksPriceWrapper,
  MainPicture,
  Picture,
  PictureAllWrapper,
  PictureWrapper,
  TagsWrapper,
  Tags,
  Map,
  MapWrapper,
  ButtonWrapper,
  ButtonRow,
} from "./ProductDetail.styles";
import DOMPurify from "dompurify";
import Button01 from "../../../commons/buttons/Button01";

export default function ProductDetailUI(props) {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar src="/boardpage/avatar.png" />
        <Info>
          <Seller>{props.data ? props.data.fetchUseditem.name : "111"}</Seller>
          <Date>{props.data ? props.data.fetchUseditem.remarks : "12121"}</Date>
        </Info>
      </AvatarWrapper>

      <Hr></Hr>
      <NameRemarksPriceWrapper>
        <NameRemarksWrapper>
          <Remarks>{props.data?.fetchUseditem.remarks}</Remarks>
          <Name>{props.data?.fetchUseditem.name}</Name>
        </NameRemarksWrapper>
        <Price>{props.data?.fetchUseditem.price}</Price>
      </NameRemarksPriceWrapper>

      <PictureAllWrapper>
        <MainPicture></MainPicture>
        <PictureWrapper>
          <Picture></Picture>
          <Picture></Picture>
          <Picture></Picture>
          <Picture></Picture>
        </PictureWrapper>
      </PictureAllWrapper>

      <Contents
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
        }}
      />

      <TagsWrapper>
        <Tags>태그들</Tags>
      </TagsWrapper>

      <Hr></Hr>
      <MapWrapper>
        <Map></Map>
      </MapWrapper>
      <Hr></Hr>
      <ButtonWrapper>
        <ButtonRow>
          <Button01 buttonName="목록으로" gotowhere={props.gotoMain} />
          <Button01 buttonName="구매하기" />
        </ButtonRow>
      </ButtonWrapper>
    </Wrapper>
  );
}
