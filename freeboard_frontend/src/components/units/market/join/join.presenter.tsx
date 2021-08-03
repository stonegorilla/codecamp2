import {
  Wrapper,
  Email,
  Password,
  Name,
  Text,
  TextError,
  TextWrapper,
  IdPasswordWrapper,
  SubmitButton,
} from "./join.styles";

export default function JoinPresenter(props) {
  return (
    <Wrapper>
      <IdPasswordWrapper>
        <TextWrapper>
          <Text>Email</Text>
          <TextError>{props.inputsErrors.email}</TextError>
        </TextWrapper>
        <Email type="text" name="email" onChange={props.onChangeInputs}></Email>

        <TextWrapper>
          <Text>Name</Text>
          <TextError>{props.inputsErrors.name}</TextError>
        </TextWrapper>
        <Name type="text" name="name" onChange={props.onChangeInputs}></Name>
        <TextWrapper>
          <Text>Password</Text>
          <TextError>{props.inputsErrors.password}</TextError>
        </TextWrapper>
        <Password
          type="text"
          name="password"
          onChange={props.onChangeInputs}
        ></Password>
        <TextWrapper>
          <Text>RePassword</Text>
          <TextError>{props.inputsErrors.repassword}</TextError>
        </TextWrapper>
        <Password
          type="text"
          name="repassword"
          onChange={props.onChangeInputs}
        ></Password>
      </IdPasswordWrapper>
      <SubmitButton onClick={props.onClickSubmit}>회원가입</SubmitButton>
    </Wrapper>
  );
}
