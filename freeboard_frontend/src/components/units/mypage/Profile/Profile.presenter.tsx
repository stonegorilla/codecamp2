import Button01 from "../../../commons/buttons/Button01";
import Inputmain from "../../../commons/inputs/Inputmain";

import {
  PictureLeftWrapper,
  PictureRightWrapper,
  PictureWrapper,
  Wrapper,
  Picture,
} from "./Profile.styles";

export default function ProfileUI(props) {
  return (
    <>
      <Wrapper>
        <h1>프로필 사진 변경</h1>
        <PictureWrapper>
          <PictureLeftWrapper>
            <b>변경하려는 사진 파일을 선택해 주세요</b>

            <input
              style={{ paddingTop: "30px" }}
              type="file"
              onChange={props.onChangeFile}
            />
          </PictureLeftWrapper>
          <PictureRightWrapper>
            <Picture src={props.fileUrl ||
                userInfo?.fetchUserLoggedIn.picture ||
                "/mypage/noimage.png"} />
            <Button01
              buttonName="사진 변경"
              type="button"
              onClick={props.onSubmitPicture}
            />
          </PictureRightWrapper>
        </PictureWrapper>

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
