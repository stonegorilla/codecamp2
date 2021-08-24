import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  Wrapper,
  HeadWrapper,
  HeadLogoWrapper,
  HeadMenuWrapper,
  HeadAdminWrapper,
  BodyWrapper,
  FootWrapper,
  TextInput,
  ContentsInput,
  AdminLogo,
  LogoutLogo,
  ALogo,
} from "../../../styles/homework/notice/IndexStyle";

export default function Homework() {
  const writer = "dolwangsung";
  const password = "1234";
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [asdf] = useMutation(
    gql`
      mutation zzzz($aaa: String, $bbb: String, $ccc: String, $ddd: String) {
        createBoard(writer: $aaa, password: $bbb, title: $ccc, contents: $ddd) {
          message
        }
      }
    `
  );

  // function onChangeWriter(event) {
  //   setWriter(event.target.value);
  // }

  // function onChangePassword(event) {
  //   setPassword(event.target.value);
  // }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  function onChangeContents(event) {
    setContents(event.target.value);
  }

  async function onClickSubmit() {
    try {
      const result = await asdf({
        // 임시저장공간 aaa에 name, bbb에 age, ccc에 school 이 들어감
        variables: {
          aaa: writer,
          bbb: password,
          ccc: title,
          ddd: contents,
        },
      });
      alert(result.data.createBoard.message);
      // createBoard 부터는 API 이름이므로 자바스크립트는 모름
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Wrapper>
      <HeadWrapper>
        <HeadLogoWrapper>
          <ALogo></ALogo>고 잇츠로드
        </HeadLogoWrapper>
        <HeadMenuWrapper>
          기본설정 회원설정 음식점설정 대학교설정 마이설정
        </HeadMenuWrapper>
        <HeadAdminWrapper>
          <AdminLogo></AdminLogo>
          <LogoutLogo></LogoutLogo>
        </HeadAdminWrapper>
      </HeadWrapper>

      <BodyWrapper>
        텍스트<TextInput type="text" onChange={onChangeTitle}></TextInput>
        내용
        <ContentsInput
          type="textarea"
          onChange={onChangeContents}
        ></ContentsInput>
        <button onClick={onClickSubmit}>데이터 입력하기</button>
      </BodyWrapper>
      <FootWrapper>2020 eatsroad Co..Ltd. All rights reserved.</FootWrapper>
    </Wrapper>
  );
}
