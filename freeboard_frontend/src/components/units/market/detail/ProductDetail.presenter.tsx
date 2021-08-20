import {
  Wrapper,
  AvatarWrapper,
  Avatar,
  AvatarLeft,
  AvatarRight,
  Info,
  Seller,
  Buyer,
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
  Heart,
} from "./ProductDetail.styles";
import DOMPurify from "dompurify";
import Button01 from "../../../commons/buttons/Button01";
import KakaomapDetail from "../../../commons/kakaomapDetail";
export default function ProductDetailUI(props) {
  return (
    <Wrapper>
      <AvatarWrapper>
        <AvatarLeft>
          <Avatar src="/boardpage/avatar.png" />
          <Info>
            <Seller>
              {props.data ? props.data.fetchUseditem.seller.name : "111"}
            </Seller>
            <Date>
              {props.data ? props.data.fetchUseditem.remarks : "12121"}
            </Date>
          </Info>
        </AvatarLeft>
        <AvatarRight>
          <Heart istoggled={props.istoggled} onClick={props.toggle}></Heart>
          <Buyer>
            구입자:
            {props.data
              ? props.data.fetchUseditem.buyer
                ? props.data.fetchUseditem.buyer.name
                : "244"
              : "343"}
          </Buyer>
        </AvatarRight>
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
        <MainPicture
          src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images?.[0]}`}
        />
        <PictureWrapper>
          {props.data?.fetchUseditem.images?.map((data: string) => (
            <Picture
              key={data}
              src={`https://storage.googleapis.com/${data}`}
            />
          ))}
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
      <MapWrapper>{/* <KakaomapDetail data={props.data} /> */}</MapWrapper>
      <Hr></Hr>
      <ButtonWrapper>
        <ButtonRow>
          <Button01 buttonName="목록으로" gotowhere={props.gotoMain} />
          <Button01 buttonName="구매하기" gotowhere={props.purchase} />
        </ButtonRow>
      </ButtonWrapper>
    </Wrapper>
  );
}
