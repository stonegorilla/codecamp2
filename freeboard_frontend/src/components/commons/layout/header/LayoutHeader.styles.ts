import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
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
export const Img = styled.img``;
export const LoginJoinWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
