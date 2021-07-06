// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import {Wrapper, Wrapper1, Wrapper2, Wrapper3,Wrapper4, Title, Name,Name1, Input, Input1,
    Input2, Input3,Input4, Input5, Button,Button1, Box, Label, h3, h4} from '../../../styles/boards/new/Home.styles'   //Home.styles 를 가져와랴
export default function Home() {


  return (
    // 반드시 무언가 하나로 감싸주어라
    <Wrapper>
      <Title><h1>게시물 등록</h1></Title>
      <Wrapper1>
        <Wrapper2>
            <Name>작성자<Name1>*</Name1></Name>

            <Input type="text" placeholder="이름을 적어 주세요"></Input>
        </Wrapper2>
        <Wrapper2>
            <Name>비밀번호</Name>
            <Input type="text" placeholder="비밀번호를 입력해 주세요"></Input>
        </Wrapper2>
      </Wrapper1>
      <Wrapper1>
          <Wrapper2>
            <Name>제목</Name>
            <Input1 type="text" placeholder="제목을 작성해 주세요"></Input1>
          </Wrapper2>
      </Wrapper1>
      <Wrapper1>
        <Wrapper2>
            <Name>내용</Name>
            <Input2 type="textarea" placeholder="내용을 작성해 주세요"></Input2>
        </Wrapper2>
      </Wrapper1>
        <Wrapper2>
            <Wrapper3>
            <Name>주소</Name>
            </Wrapper3>

            <Wrapper3>

                <Input3 type="text"></Input3>
                <Button>우편번호검색</Button>
            </Wrapper3>

        </Wrapper2>


      <Wrapper1>
          <Input1 type="text"></Input1>
      </Wrapper1>
      <Wrapper1>
          <Input1 type="text"></Input1>
      </Wrapper1>
      <Wrapper1>
          <Wrapper2>
            <Name >유투브</Name>
            <Input1 type="text" placeholder="링크를 복사해 주세요"></Input1>
          </Wrapper2>
      </Wrapper1>
      <Wrapper1>
        <Wrapper2>
          <Name>사진첨부</Name>
          <Wrapper4>
                <Box>
                    <Label for="Upload1">+</Label>
                    <Label for="Upload1">Upload</Label>
                </Box>
                    <Input5 type="file" id="Upload1"></Input5>
                <Box>
                    <Label for="Upload2">+</Label>
                    <Label for="Upload2">Upload</Label>
                </Box>
                    <Input5 type="file" id="Upload2"></Input5>
                <Box>
                    <Label for="Upload3">+</Label>
                    <Label for="Upload3">Upload</Label>
                </Box>
                    <Input5 type="file" id="Upload3"></Input5>
          </Wrapper4>
        </Wrapper2>
      </Wrapper1>
      <Wrapper1>
        <Wrapper2>
            <Name>메인설정</Name>
            <Input4 type="radio" name="you"></Input4>유투브
            <Input4 type="radio" name="you"></Input4>사진
            </Wrapper2>
      </Wrapper1>
      <Button1>등록하기</Button1>

    </Wrapper>

  )
}