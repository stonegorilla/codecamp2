import { OmitProps } from "antd/lib/transfer/ListBody";
import {
  Wrapper,
  Email,
  Password,
  Text,
  TextError,
  TextWrapper,
  EmailPasswordWrapper,
  SubmitButton,
} from "./login.styles";

export default function LoginPresenter(props) {
  return (
    <Wrapper>
      <EmailPasswordWrapper>
        <TextWrapper>
          <Text>Email</Text>
          <TextError>{props.inputsErrors.email}</TextError>
        </TextWrapper>
        <Email type="text" name="email" onChange={props.onChangeInputs}></Email>
        <TextWrapper>
          <Text>Password</Text>
          <TextError>{props.inputsErrors.password}</TextError>
        </TextWrapper>
        <Password
          type="text"
          name="password"
          onChange={props.onChangeInputs}
        ></Password>
        <SubmitButton onClick={props.onClickSubmit}>로그인</SubmitButton>
      </EmailPasswordWrapper>
    </Wrapper>
  );
}
