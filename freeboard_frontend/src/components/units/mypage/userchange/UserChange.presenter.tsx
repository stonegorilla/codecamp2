import Button01 from "../../../commons/buttons/Button01";
import Inputmain from "../../../commons/inputs/Inputmain";
import { Wrapper } from "./UserChange.styles";

export default function UserChangeUI(props) {
  return (
    <>
      <Wrapper>
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
          <Inputmain
            inputName="이름변경"
            type="text"
            register={{ ...props.register("name") }}
            errorMessage={props.errors.name?.message}
          />
          <Button01
            buttonName="회원정보 변경"
            type="submit"
            isActive={props.isActive}
          />
        </form>
      </Wrapper>
    </>
  );
}
