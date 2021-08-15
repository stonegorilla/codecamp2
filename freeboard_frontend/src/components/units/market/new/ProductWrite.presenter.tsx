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
import Inputmain from "../../../commons/inputs/Inputmain";
import InputContent from "../../../commons/inputs/inputcontext";
import Button01 from "../../../commons/buttons/Button01";
import InputContent2 from "../../../commons/inputs/inputcontent2";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import KakaomapWrite from "../../../commons/kakaomapWrite";

export default function ProductWriteUI(props: any) {
  return (
    <Wrapper>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <HeadWrapper>
          <Title>상품 등록</Title>
        </HeadWrapper>

        <TextInputWrapper>
          <Inputmain
            inputName="상품명"
            type="text"
            register={{ ...props.register("name") }}
            errorMessage={props.errors.name?.message}
          />
        </TextInputWrapper>

        <TextInputWrapper>
          <Inputmain
            inputName="한줄요약"
            type="text"
            register={{ ...props.register("remarks") }}
            errorMessage={props.errors.remarks?.message}
          />
        </TextInputWrapper>

        <TextAreaInputWrapper>
          {/* <InputContent
            inputName="상품설명"
            register={{ ...props.register("contents") }}
            errorMessage={props.errors.contents?.message}
          /> */}
          <InputContent2
            inputName="상품설명"
            aaa={props.onChangeContents}
            errorMessage={props.errors.contents?.message}
          />
        </TextAreaInputWrapper>

        <TextInputWrapper>
          <Inputmain
            inputName="가격"
            type="text"
            register={{ ...props.register("price") }}
            errorMessage={props.errors.price ? "숫자를 입력하시오" : ""}
          />
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
            <KakaomapWrite />
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
          {new Array(3).fill(1).map((data, index) => (
            <Uploads01
              key={`${data}_${index}`}
              index={index}
              onChangeFiles={props.onChangeFiles}
            />
          ))}
        </PictureWrapper>

        <Name>메인사진설정</Name>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
        <ButtonWrapper>
          <Button01
            buttonName="상품 등록"
            type="submit"
            isActive={props.isActive}
          />
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
}
