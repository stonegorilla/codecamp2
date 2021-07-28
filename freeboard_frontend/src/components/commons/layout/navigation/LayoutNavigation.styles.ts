import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: #ffd600;
  width: 1920px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: perspective(1000px) rotateX(150deg);
`;

export const Menu = styled.div`
  font-size: 20px;
  cursor: pointer;
  
  :hover {
    color: orange;
  }
`;

export const MenuWrapper = styled.div`
  width: 800px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;