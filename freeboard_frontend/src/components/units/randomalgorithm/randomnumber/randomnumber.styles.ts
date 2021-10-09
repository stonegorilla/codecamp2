import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const NumberInput = styled.input`
  width: 200px;
  height: 50px;
`;

export const OverlapWrapper = styled.div``;

export const OverlapButton = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  background-color: blue;
  border-radius: 50px;
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
  margin: 0px 10px 0px;
  cursor: pointer;
  font-size: 50px;
  :hover {
    color: blue;
  }
`;
