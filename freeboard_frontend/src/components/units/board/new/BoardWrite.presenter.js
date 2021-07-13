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

    BtnWrapper} from './BoardWrite.styles'   //Home.styles 를 가져와랴


    export default function BoardWriteUI (props){

        return (
                        // 반드시 무언가 하나로 감싸주어라 (보통 Wrapper 를 쓴다. )
            <Wrapper>
            <HeadWrapper><Title>게시물 등록</Title></HeadWrapper>

            <WriterPasswordWrapper>
            <TextInputWrapper>
                <NameWrapper>
                    <Name>작성자</Name>
                    <NameYellow>*</NameYellow>
                    <NameRed>{props.writerError}</NameRed>
                </NameWrapper>
                <InputShort type="text" placeholder="이름을 적어 주세요" onChange={props.aaa}></InputShort>
            </TextInputWrapper>

            <TextInputWrapper>
                <NameWrapper>
                    <Name>비밀번호</Name>
                    <NameRed>{props.passwordError}</NameRed>
                </NameWrapper>
                <InputShort type="text" placeholder="비밀번호를 입력해 주세요" onChange={props.bbb}></InputShort>
            </TextInputWrapper>
            </WriterPasswordWrapper>


                <TextInputWrapper>
                <NameWrapper>
                    <Name>제목</Name>
                    <NameRed>{props.titleError}</NameRed>
                </NameWrapper>

                <Input type="text" placeholder="제목을 작성해 주세요" onChange={props.ccc}></Input>
                </TextInputWrapper>



            <TextAreaInputWrapper>
                <NameWrapper>
                    <Name>내용</Name>
                    <NameRed>{props.contentsError}</NameRed>
                </NameWrapper>
                <InputContent placeholder="내용을 작성해 주세요" onChange={props.ddd}></InputContent>
            </TextAreaInputWrapper>

            <TextZipCodeInputWrapper>
                <NameWrapper>
                    <Name>주소</Name>
                    <NameRed>{props.addressError}</NameRed>
                </NameWrapper>

                <ZipCodeWrapper>
                    <InputZipCode type="text" onChange={props.eee}></InputZipCode>
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
            <ButtonYellow onClick = {props.RedTrigger} active={props.fff}>등록하기</ButtonYellow>
            </BtnWrapper>
            </Wrapper>
        )
    }
