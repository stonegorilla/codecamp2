import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const ListWrapper = styled.div`
  width: 100%;
  padding: 50px 500px 50px;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.div`
  cursor: pointer;
  font-size: 50px;
  :hover {
    color: blue;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 50px 500px 50px;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  width: 200px;
  height: 100px;
  color: white;
  background-color: blue;
  border-radius: 50px;
  border: 0px;
`;
