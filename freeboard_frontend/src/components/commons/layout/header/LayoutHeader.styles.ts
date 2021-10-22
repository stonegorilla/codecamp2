import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 152px;
  padding-left: 50px;
  padding-right: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 2s;
  :hover {
    transition: 2s;
    background-color: #1ddb16;
    color: #000;
  }
`;
export const ImgTitleWrapper = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Img = styled.img`
  cursor: pointer;
`;

export const Picture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const Title = styled.div`
  font-size: 70px;
  font-weight: bolder;
`;
export const LoginJoinWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogOutWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ToLogin = styled.div`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

export const ToJoin = styled.div`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  color: red;
`;
export const PointCharge = styled.div`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  color: red;
`;
export const BeLogOut = styled.div`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;
