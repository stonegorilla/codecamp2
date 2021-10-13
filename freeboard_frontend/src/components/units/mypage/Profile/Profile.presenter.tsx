import Button01 from "../../../commons/buttons/Button01";
import Inputmain from "../../../commons/inputs/Inputmain";
import { Wrapper } from "./Profile.styles";

export default function ProfileUI(props) {
  return (
    <>
      <Wrapper>
        <h1>비밀번호 변경</h1>
        <form onSubmit={props.handleSubmitPwd(props.onSubmitPassword)}>
          <Inputmain
            inputName="비밀번호"
            type="text"
            register={{ ...props.registerPwd("password") }}
            errorMessage={props.errorsPwd.password?.message}
          />
          <Button01
            buttonName="비밀번호 변경"
            type="submit"
            isActive={props.isActivePwd}
          />
        </form>
        <h1>이름 변경</h1>
        <form onSubmit={props.handleSubmitUser(props.onSubmitUser)}>
          <Inputmain
            inputName="이름변경"
            type="text"
            register={{ ...props.registerUser("name") }}
            errorMessage={props.errorsUser.name?.message}
          />
          <Button01
            buttonName="회원정보 변경"
            type="submit"
            isActive={props.isActiveUser}
          />
        </form>
      </Wrapper>
    </>
  );
}
