// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { useState } from 'react'
import {Wrapper, Wrapper1, Wrapper2, Wrapper3,Wrapper4, Title, Name,Name1, Input, Input1,
    Input2, Input3,Input4, Input5, Button,Button1, Box, Label,RedError} from '../../../styles/boards/new/Home.styles'   //Home.styles 를 가져와랴
export default function Home() {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [address, setAddress] = useState('')

  const [nameError, setNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [titleError, setTitleError] = useState('')
  const [contentError, setContentError] = useState('')
  const [addressError, setAddressError] = useState('')

  function aaa(event){
    setName(event.target.value)
  }
  function bbb(event){
    setPassword(event.target.value)
  }
  function ccc(event){
    setTitle(event.target.value)
  }
  function ddd(event){
    setContent(event.target.value)
  }
  function eee(event){
    setAddress(event.target.value)
  }

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
    }
  }

  return (
    // 반드시 무언가 하나로 감싸주어라
    <Wrapper>
      <Title><h1>게시물 등록</h1></Title>
      <Wrapper1>
        <Wrapper2>
            <Name>작성자<Name1>*</Name1></Name>
            <RedError>{nameError}</RedError>
            <Input type="text" placeholder="이름을 적어 주세요" onChange={aaa}></Input>

        </Wrapper2>
        <Wrapper2>
            <Name>비밀번호</Name>
            <RedError>{passwordError}</RedError>
            <Input type="text" placeholder="비밀번호를 입력해 주세요" onChange={bbb}></Input>
        </Wrapper2>
      </Wrapper1>
      <Wrapper1>
          <Wrapper2>
            <Name>제목</Name>
            <RedError>{titleError}</RedError>
            <Input1 type="text" placeholder="제목을 작성해 주세요" onChange={ccc}></Input1>
          </Wrapper2>
      </Wrapper1>
      <Wrapper1>
        <Wrapper2>
            <Name>내용</Name>
            <RedError>{contentError}</RedError>
            <Input2 placeholder="내용을 작성해 주세요" onChange={ddd}></Input2>
        </Wrapper2>
      </Wrapper1>
        <Wrapper2>
            <Wrapper3>
            <RedError>{addressError}</RedError>
            <Name>주소</Name>
            </Wrapper3>

            <Wrapper3>

                <Input3 type="text" onChange={eee}></Input3>
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
      <Button1 onClick = {RedTrigger}>등록하기</Button1>

    </Wrapper>

  )
}