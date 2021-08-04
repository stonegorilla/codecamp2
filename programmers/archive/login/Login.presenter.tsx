import {
  Wrapper,
  Login,
  Logo,
  Writer,
  Password,
  Error,
  LoginKeep,
  SigninButton,
  Bar,
  Find,
  EmailFind,
  PasswordFind,
  Signup,
} from "./Login.styles";
import { INPUTS_INIT } from "./Login.container";
import { useState } from "react";

import { ILoginUIProps } from "./Login.types";
import { useContext } from "react";
import { BoardsEditPageContext } from "../../../../pages/boards/[boardId]/edit";

interface ILoginUIProps {
  active: boolean;
  inputsErrors: typeof INPUTS_INIT;
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClickSubmit: () => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function LoginUI(props: ILoginUIProps) {
  const { isEdit, data } = useContext(BoardsEditPageContext);
  return (
    <>
      <Wrapper>
        <Login>
          <Logo>
            <img src="/images/boards/login/logo22.png" />
          </Logo>
          <Writer
            name="writer"
            type="text"
            placeholder="이메일을 적어주세요."
            onChange={props.onChangeInputs}
          />
          <Error>{props.inputsErrors.writer}</Error>
          <Password
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangeInputs}
          />
          <Error>{props.inputsErrors.password}</Error>
          <LoginKeep>로그인 상태 유지</LoginKeep>
          <SigninButton
            onClick={isEdit ? props.onClickUpdate : props.onClickSubmit}
            active={props.active}
          >
            로그인하기
            {isEdit ? "로그인하기" : ""}
          </SigninButton>
          <Bar></Bar>
          <Find>
            <EmailFind>이메일 찾기</EmailFind>
            <>|</>
            <PasswordFind>비밀번호 찾기</PasswordFind>
            <>|</>
            <Signup>회원가입</Signup>
          </Find>
        </Login>
      </Wrapper>
    </>
  );
}
