import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding-top: 82px;
  padding-left: 40px;
`;

export const Row = styled.div`
  width: 1000px;
  line-height: 40px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;
`;

export const RowBold = styled.div`
  width: 1000px;
  line-height: 40px;
  margin-top: 20px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;
  font-weight: bold;
  background-color: pink;
`;

export const B = styled.b`
  color: #bdbdbd;
  cursor: pointer;
  font-size: 20px;
`;
export const ColumnIndex = styled.div`
  width: 10%;

  display: flex;
  justify-content: center;
`;

export const ColumnTitle = styled.div`
  width: 30%;

  display: flex;
  justify-content: center;
`;
export const ColumnIsSold = styled.div`
  width: 15%;
  color: green;

  display: flex;
  justify-content: center;
`;
export const ColumnPrice = styled.div`
  width: 15%;

  display: flex;
  justify-content: center;
`;

export const ColumnSeller = styled.div`
  width: 15%;

  display: flex;
  justify-content: center;
`;
export const ColumnDate = styled.div`
  width: 15%;

  display: flex;
  justify-content: center;
`;
