
import { useState } from 'react' //useState 는 동적인 웹 만들때 많이 사용할 것 같으니 넣어주자. 그리고 이 페이지에선 쓰인다.
import {Wrapper,
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

        BtnWrapper} from '../../../styles/boards/new/Home.styles'   //Home.styles 를 가져와랴
export default function Home() {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [address, setAddress] = useState('')
  // 위 5개는 사용자가 input 안에 써넣은 결과값을 나타내는 것이다.
  // 실시간으로 값을 저장하기 위해
  const [nameError, setNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [titleError, setTitleError] = useState('')
  const [contentError, setContentError] = useState('')
  const [addressError, setAddressError] = useState('')
  // 위 5개는 빨간색으로 표시되는 글을 나타내기 위해 쓴것이다.
  function aaa(event){
    setName(event.target.value)
  }
  // aaa 함수 내에서 event 변수를 이용해 이름 결과값을 실시간으로 저장한다.
  function bbb(event){
    setPassword(event.target.value)
  }
  // bbb 함수 내에서 event 변수를 이용해 비밀번호 결과값을 실시간으로 저장한다.
  function ccc(event){
    setTitle(event.target.value)
  }
  // ccc 함수 내에서 event 변수를 이용해 타이틀 결과값을 실시간으로 저장한다.
  function ddd(event){
    setContent(event.target.value)
  }
  // ddd 함수 내에서 event 변수를 이용해 내용 결과값을 실시간으로 저장한다.
  function eee(event){
    setAddress(event.target.value)
  }
  // eee 함수 내에서 event 변수를 이용해 주소 결과값을 실시간으로 저장한다.
  function RedTrigger(event){
    if(name === ""){
      setNameError("작성자 이름을 입력해 주세요")
    }else if(password === ""){
      setNameError("")
      setPasswordError("비밀번호를 입력해 주세요")
    }else if(title === ""){
      setPasswordError("")
      setTitleError("제목을 입력해 주세요")
    }else if(content === ""){
      setTitleError("")
      setContentError("내용을 입력해 주세요")
    }else if(address===""){
      setContentError("")
      setAddressError("주소를 입력해 주세요")
    }else{
      setNameError("")
      setPasswordError("")
      setTitleError("")
      setContentError("")
      setAddressError("")
      alert("성공")

      // 이름, 비밀번호, 제목, 내용, 주소 결과값을 이용해 비어있는 값이 있으면 빨간 경고 글씨를 내보낸다.
    }
  }

  return (
    // 반드시 무언가 하나로 감싸주어라 (보통 Wrapper 를 쓴다. )
    <Wrapper>
      <HeadWrapper><Title>게시물 등록</Title></HeadWrapper>

      <WriterPasswordWrapper>
        <TextInputWrapper>
            <NameWrapper>
              <Name>작성자</Name>
              <NameYellow>*</NameYellow>
              <NameRed>{nameError}</NameRed>
            </NameWrapper>
            <InputShort type="text" placeholder="이름을 적어 주세요" onChange={aaa}></InputShort>
        </TextInputWrapper>

        <TextInputWrapper>
            <NameWrapper>
              <Name>비밀번호</Name>
              <NameRed>{passwordError}</NameRed>
            </NameWrapper>
            <InputShort type="text" placeholder="비밀번호를 입력해 주세요" onChange={bbb}></InputShort>
        </TextInputWrapper>
      </WriterPasswordWrapper>


          <TextInputWrapper>
            <NameWrapper>
              <Name>제목</Name>
              <NameRed>{titleError}</NameRed>
            </NameWrapper>

            <Input type="text" placeholder="제목을 작성해 주세요" onChange={ccc}></Input>
          </TextInputWrapper>



        <TextAreaInputWrapper>
            <NameWrapper>
              <Name>내용</Name>
              <NameRed>{contentError}</NameRed>
            </NameWrapper>
            <InputContent placeholder="내용을 작성해 주세요" onChange={ddd}></InputContent>
        </TextAreaInputWrapper>

        <TextZipCodeInputWrapper>
            <NameWrapper>
              <Name>주소</Name>
              <NameRed>{addressError}</NameRed>
            </NameWrapper>

            <ZipCodeWrapper>
                <InputZipCode type="text" onChange={eee}></InputZipCode>
                <Button>우편번호검색</Button>
            </ZipCodeWrapper>
        </TextZipCodeInputWrapper>


      <TextAddressInputWrapper>
          <Input type="text"></Input>
      </TextAddressInputWrapper>
      <TextAddressBottomInputWrapper>
          <Input type="text"></Input>
      </TextAddressBottomInputWrapper>


      <TextInputWrapper>
        <Name >유투브</Name>
        <Input type="text" placeholder="링크를 복사해 주세요"></Input>
      </TextInputWrapper>


        <TextPictureWrapper>
          <Name>사진첨부</Name>
          <UploadWrapper>
                <Box>
                    {/* <Label for="Upload1">+</Label>
                    <Label for="Upload1">Upload</Label> */}
                </Box>
                    {/* <Input5 type="file" id="Upload1"></Input5> */}
                <Box>
                    {/* <Label for="Upload2">+</Label>
                    <Label for="Upload2">Upload</Label> */}
                </Box>
                    {/* <Input5 type="file" id="Upload2"></Input5> */}
                <Box>
                    {/* <Label for="Upload3">+</Label>
                    <Label for="Upload3">Upload</Label> */}
                </Box>
                    {/* <Input5 type="file" id="Upload3"></Input5> */}
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
      <ButtonYellow onClick = {RedTrigger}>등록하기</ButtonYellow>
      </BtnWrapper>
    </Wrapper>

  )
}