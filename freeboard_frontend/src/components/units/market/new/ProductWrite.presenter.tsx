import {
  Wrapper,
  HeadWrapper,
  MapWrapper,
  Title,
  TextInputWrapper,
  NameWrapper,
  Name,
  NameRed,
  Input,
  InputContent,
  TextAreaInputWrapper,
  Img,
  InputGPS,
  InputAddress,
  Box,
  RadioButton,
  RadioLabel,
  AddressWrapper,
  GPSWrapper,
  LatLngWrapper,
  GPSAddressWrapper,
  MapGPSAddressWrapper,
  PictureWrapper,
  SubmitButton,
  ButtonWrapper,
  Logo,
  LogoWrapper,
} from "./ProductWrite.styles"; //Home.styles 를 가져와랴
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ProductWriteUI(props: any) {
  return (
    <Wrapper>
      <HeadWrapper>
        <Title>상품 등록</Title>
      </HeadWrapper>

      <TextInputWrapper>
        <NameWrapper>
          <Name>상품명</Name>
          <NameRed>상품명을 입력하시오</NameRed>
        </NameWrapper>

        <Input></Input>
      </TextInputWrapper>

      <TextInputWrapper>
        <NameWrapper>
          <Name>한줄요약</Name>
          <NameRed>힌줄요약은 써주세요</NameRed>
        </NameWrapper>

        <Input></Input>
      </TextInputWrapper>

      <TextAreaInputWrapper>
        <NameWrapper>
          <Name>내용</Name>
          <NameRed>ㅎㅣ히 </NameRed>
        </NameWrapper>
        <InputContent></InputContent>
      </TextAreaInputWrapper>

      <TextInputWrapper>
        <NameWrapper>
          <Name>판매가격</Name>
          <NameRed>기격 써넣으세요</NameRed>
        </NameWrapper>

        <Input></Input>
      </TextInputWrapper>

      <TextInputWrapper>
        <NameWrapper>
          <Name>태그입력</Name>
          <NameRed>태그입력은 해야하나요</NameRed>
        </NameWrapper>

        <Input></Input>
      </TextInputWrapper>

      <MapGPSAddressWrapper>
        <MapWrapper>
          <Name>거래위치</Name>
          <Img src="/marketpage/map.png"></Img>
        </MapWrapper>

        <GPSAddressWrapper>
          <GPSWrapper>
            <Name>GPS</Name>
            <LatLngWrapper>
              <InputGPS placeholder="위도LAT" />
              <LogoWrapper>
                <Logo></Logo>
              </LogoWrapper>

              <InputGPS placeholder="위도LNG" />
            </LatLngWrapper>
          </GPSWrapper>

          <AddressWrapper>
            <Name>주소</Name>
            <InputAddress />
            <InputAddress />
          </AddressWrapper>
        </GPSAddressWrapper>
      </MapGPSAddressWrapper>

      <PictureWrapper>
        <Name>사진첨부</Name>
        <Box></Box>
      </PictureWrapper>

      <Name>메인사진설정</Name>
      <RadioButton type="radio" id="youtube" name="radio-button" />
      <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
      <RadioButton type="radio" id="image" name="radio-button" />
      <RadioLabel htmlFor="image">사진</RadioLabel>
      <ButtonWrapper>
        <SubmitButton>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
