import {
  Id,
  Password,
  Text,
  TextError,
  TextWrapper,
  IdPasswordWrapper,
} from "./login.styles";

export default function LoginPresenter() {
  return (
    <>
      <IdPasswordWrapper>
        <TextWrapper>
          <Text>Id</Text>
          <TextError>제대로된 아이디 써주세요</TextError>
        </TextWrapper>
        <Id></Id>
        <TextWrapper>
          <Text>Password</Text>
          <TextError>제대로된 패스워드 써주세요</TextError>
        </TextWrapper>
        <Password></Password>
      </IdPasswordWrapper>
    </>
  );
}
