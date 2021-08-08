import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 640px;
  height: 1138px;
  /* 보통 height는 없애라고 한다.  */
  /* opacity: 0.55; */
  background-image: url("/mypage/img-bg.png");
  /* 잇츠로드 배경 페이지를 웹에다 표시 */
`;
// 참고로 위의 바 때문에 padding 을 줄수가 없다.

export const Bar = styled.div`
  width: 639px;
  height: 43px;
  /* margin: 0 1px 0 0; */
  background-color: green;
`;
// 잇츠로드 맨위 바를 다루는 부품 잠시 그린색으로 보관해둠

export const Logo = styled.div`
  width: 100px;
  height: 100px;
  /* padding: 4px 16px 0 17px; */
  object-fit: contain;
  /* background-color : red; */
  background-image: url("/mypage/a.png");
`;
// 잇츠로드 장소표시 아이콘 위치

export const ItsRoad = styled.div`
  width: 218px;
  height: 62px;

  text-shadow: 2px 2px 7px rgba(0, 0, 0, 0.3);
  font-family: SpoqaHanSans;
  font-size: 56px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -2px;
  color: #ffffff;
`;
export const Label = styled.input`
  width: 540px;
  height: 30px;

  /* padding: 8px 0 2px 520px; */

  font-size: 24px;
  color: white;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.88;
  letter-spacing: normal;
  background-color: rgba(0, 0, 0, 0);
  border-top: 0px;
  border-left: 0px;
  border-bottom: 1px solid white;
  border-right: 0px;
`;

export const RedError = styled.div`
  color: red;
  font-size: 20px;
  width: 540px;
  height: 30px;
`;

export const Rectangle = styled.button`
  width: 540px;
  height: 76px;

  padding: 25px 0;
  opacity: 0.6;
  border-radius: 38px;
  background-color: #ff1b6d;
  color: white;
  font-size: 20px;
  text-align: center;
`;

export const Mask = styled.a`
  color: white;
  font-size: 20px;
`;

export const Rectangle2 = styled.button`
  width: 540px;
  height: 76px;

  padding: 18px 128px;
  color: yellow;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 38px;
  border: solid 2px #fae100;
`;

export const LogoWrapper = styled.div`
  height: 189px;
  margin-top: 181px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const InputWrapper = styled.div`
  height: 182px;
  margin-top: 162px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const InputRedWrapper = styled.div`
  height: 81px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonMenuWrapper = styled.div`
  height: 277px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  width: 402px;

  display: flex;
  justify-content: space-between;
`;

// 로고와 잇츠로드 글씨는 LogoWrapper 로 묶을 것
// 치는곳과 레드에러 부분을 InputRedWrapper 로 묶을 것
// 이메일과 비밀번호 쓰는 것은  InputWrappper 로 묶을 것
// 로그인,가운데 흰글씨들, 카카오톡 로그인을 묶어 ButtonMenuWrapper로 묶을 것
// 흰색 글씨들은 MenuWrapper로 묶을 것
