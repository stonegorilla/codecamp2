import {
  Wrapper,
  Signup,
  Signup__Title,
  Information,
  Email__Title,
  Email__Input,
  Name__Title,
  Name__Input,
  Password__Title,
  Password__Input,
  Password2__Title,
  Password2__Input,
  Signup__Button,
} from "./Signup.styles";

export default function SignupUI() {
  return (
    <Wrapper>
      <Signup>
        <Signup__Title>회원가입</Signup__Title>
        <Information>
          <Email__Title>이메일</Email__Title>
          <Email__Input placeholder="이메일을 입력해주세요." />
          <Name__Title>이름</Name__Title>
          <Name__Input placeholder="이름을 입력해주세요." />
          <Password__Title>비밀번호</Password__Title>
          <Password__Input placeholder="비밀번호를 입력해주세요." />
          <Password2__Title>비밀번호 확인</Password2__Title>
          <Password2__Input placeholder="비밀번호를 입력해주세요." />
        </Information>
        <Signup__Button>회원가입하기</Signup__Button>
      </Signup>
    </Wrapper>
  );
}
