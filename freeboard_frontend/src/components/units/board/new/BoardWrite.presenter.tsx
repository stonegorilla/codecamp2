import {
  Wrapper,
  HeadWrapper,
  NameWrapper,
  WriterPasswordWrapper,
  TextInputWrapper,
  TextAreaInputWrapper,
  TextZipCodeInputWrapper,
  TextAddressInputWrapper,
  TextAddressBottomInputWrapper,
  ZipCodeWrapper,
  TextPictureWrapper,
  UploadWrapper,
  TextRadioWrapper,
  RadioButtonWrapper,
  Title,
  Name,
  NameYellow,
  NameRed,
  InputShort,
  Input,
  InputContent,
  InputZipCode,
  Inputradio,
  Button,
  ButtonYellow,
  Box,
  BtnWrapper,
  Img,
  InputFile,
} from "./BoardWrite.styles"; //Home.styles 를 가져와랴
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function BoardWriteUI(props: any) {
  return (
    // 반드시 무언가 하나로 감싸주어라 (보통 Wrapper 를 쓴다. )
    <Wrapper>
      {/* {!props.isEdit && (
        <Modal
          title="게시글 등록"
          visible={props.isOpen}
          onOk={props.onClose}
          onCancel={props.onClose}
        >
          <div>게시물이 정상적으로 등록되었습니다.</div>
        </Modal>
      )}

      {props.isEdit && (
        <Modal
          title="게시글 수정"
          visible={props.isOpen}
          onOk={props.onClose}
          onCancel={props.onClose}
        >
          <div>게시물이 정상적으로 수정되었습니다.</div>
        </Modal>
      )} */}

      {props.isOpenAddress && (
        <Modal
          title="주소검색하기"
          visible={true}
          onCancel={props.onClickCancel}
        >
          {/* <input type="text" />
          <br />
          <input type="password" /> */}
          {/* autoClose = {true} */}
          {/* 여기서 autoClose는 주소를 */}
        </Modal>
      )}

      <HeadWrapper>
        <Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</Title>
      </HeadWrapper>

      <WriterPasswordWrapper>
        <TextInputWrapper>
          <NameWrapper>
            <Name>작성자</Name>
            <NameYellow>*</NameYellow>
            <NameRed>{props.writerError}</NameRed>
          </NameWrapper>
          <InputShort
            type="text"
            placeholder="이름을 적어 주세요"
            name="writer"
            onChange={props.onChangeInputs}
            //defaultValue={props.data?.fetchBoard.writer}
            //readOnly={props.data?.fetchBoard.writer}
          ></InputShort>
        </TextInputWrapper>

        <TextInputWrapper>
          <NameWrapper>
            <Name>비밀번호</Name>
            <NameRed>{props.passwordError}</NameRed>
          </NameWrapper>
          <InputShort
            type="text"
            placeholder="비밀번호를 입력해 주세요"
            name="password"
            onChange={props.onChangeInputs}
          ></InputShort>
        </TextInputWrapper>
      </WriterPasswordWrapper>

      <TextInputWrapper>
        <NameWrapper>
          <Name>제목</Name>
          <NameRed>{props.titleError}</NameRed>
        </NameWrapper>

        <Input
          type="text"
          placeholder="제목을 작성해 주세요"
          name="title"
          onChange={props.onChangeInputs}
          defaultValue={props.data?.fetchBoard.title}
        ></Input>
      </TextInputWrapper>

      <TextAreaInputWrapper>
        <NameWrapper>
          <Name>내용</Name>
          <NameRed>{props.contentsError} </NameRed>
        </NameWrapper>
        <InputContent
          placeholder="내용을 작성해 주세요"
          name="contents"
          onChange={props.onChangeInputs}
          defaultValue={props.data?.fetchBoard.contents}
        ></InputContent>
      </TextAreaInputWrapper>

      <TextZipCodeInputWrapper>
        <NameWrapper>
          <Name>주소</Name>
        </NameWrapper>

        <ZipCodeWrapper>
          <InputZipCode type="text" value={props.zoneCode}></InputZipCode>
          <Button onClick={props.onClickOpenModal}>우편번호검색</Button>
        </ZipCodeWrapper>
      </TextZipCodeInputWrapper>

      <TextAddressInputWrapper>
        <Input type="text" value={props.address}></Input>
      </TextAddressInputWrapper>
      <TextAddressBottomInputWrapper>
        <Input type="text"></Input>
      </TextAddressBottomInputWrapper>

      <TextInputWrapper>
        <Name>유투브</Name>
        <Input
          type="text"
          placeholder="링크를 복사해 주세요"
          name="youtubeUrl"
          onChange={props.onChangeInputs}
          defaultValue={props.data?.fetchBoard.youtubeUrl}
        ></Input>
      </TextInputWrapper>

      <TextPictureWrapper>
        <Name>사진첨부</Name>
        {/* <Img src={props.imageUrl} /> */}
        <UploadWrapper>
          {props.imageUrl ? (
            <InputFile onClick={props.onClickGreyBox1} src={props.imageUrl} />
          ) : (
            <Box onClick={props.onClickGreyBox1}>
              <>+</>
              <>Upload</>
            </Box>
          )}
          <input
            ref={props.fileRef1}
            type="file"
            onChange={props.onChangeFile1}
            style={{ display: "none" }}
          />
          {props.imageUrl ? (
            <InputFile onClick={props.onClickGreyBox2} src={props.imageUrl} />
          ) : (
            <Box onClick={props.onClickGreyBox2}>
              <>+</>
              <>Upload</>
            </Box>
          )}
          <input
            ref={props.fileRef2}
            type="file"
            onChange={props.onChangeFile2}
            style={{ display: "none" }}
          />
        </UploadWrapper>
      </TextPictureWrapper>

      <TextRadioWrapper>
        <Name>메인설정</Name>
        <RadioButtonWrapper>
          <Inputradio type="radio" name="you"></Inputradio>유투브
          <Inputradio type="radio" name="you"></Inputradio>사진
        </RadioButtonWrapper>
      </TextRadioWrapper>

      <BtnWrapper>
        {!props.isEdit && (
          <ButtonYellow onClick={props.RedTrigger} active={props.fff}>
            등록하기
          </ButtonYellow>
        )}
        {props.isEdit && (
          <ButtonYellow onClick={props.onClickEdit} active={props.fff}>
            수정하기
          </ButtonYellow>
        )}
      </BtnWrapper>
    </Wrapper>
  );
}
