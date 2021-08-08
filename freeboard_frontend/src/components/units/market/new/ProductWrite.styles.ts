import styled from "@emotion/styled";

// styled 나오면 그냥 css 구나 생각하면 됨

// 왠만하면 태그는 의미가 있는 태그로 이름을 지을 것

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  // margin은 나중에 설정할듯,
  margin-top: 100px;
  margin-left: 100px;
  padding-left: 101px;
  padding-right: 103px;
  border: 1px solid;
  box-shadow: 2px 4px 13px rgba(0, 0, 0, 0.7);
`;

export const HeadWrapper = styled.div`
  width: 100%;
  height: 173px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const MapWrapper = styled.div`
  width: 384px;
  height: 292px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GPSWrapper = styled.div`
  width: 588px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LatLngWrapper = styled.div`
  width: 588px;
  height: 52px;
  display: flex;
`;

export const AddressWrapper = styled.div`
  width: 588px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GPSAddressWrapper = styled.div`
  width: 588px;
  height: 292px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MapGPSAddressWrapper = styled.div`
  width: 996px;
  height: 292px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

export const PictureWrapper = styled.div`
  height: 240px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Title = styled.h1``;

export const TextInputWrapper = styled.div`
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 996px;
  height: 52px;
`;

export const InputGPS = styled.input`
  width: 108px;
  height: 52px;
`;

export const InputAddress = styled.input`
  width: 588px;
  height: 52px;
`;
export const LogoWrapper = styled.div`
  width: 56px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.div`
  width: 14px;
  height: 20px;

  background-image: url("/marketpage/YellowLogo.png");
`;
export const NameWrapper = styled.div`
  display: flex;
  justify-content: left;
`;

export const Name = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;
`;
export const NameYellow = styled.span`
  font-size: 16px;
  color: #ffd600;
  margin-bottom: 16px;
`;
export const NameRed = styled.div`
  color: red;
  font-size: 16px;
`;

export const InputContent = styled.textarea`
  width: 996px;
  height: 480px;
`;

export const TextAreaInputWrapper = styled.div`
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Img = styled.img``;

export const Box = styled.div`
  width: 180px;
  height: 180px;
  margin-bottom: 40px;

  background-color: gray;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;
export const ButtonWrapper = styled.div`
  width: 996px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
`;
export const SubmitButton = styled.button`
  width: 179px;
  height: 45px;
  margin-top: 40px;
  background-color: grey;
  border: none;
  cursor: pointer;

  font-size: 16px;
`;
