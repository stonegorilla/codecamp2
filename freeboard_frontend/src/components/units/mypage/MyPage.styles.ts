import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const WrapperLeft = styled.div`
  width: 330px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 50px;
  line-height: 100px;

  font-weight: bold;
`;

export const Picture = styled.img`
  margin-top: 40px;
  width: 100px;
  height: 100px;
`;

export const Name = styled.div`
  font-size: 35px;
  line-height: 70px;
  color: #ffd600;
  font-weight: bold;
`;
export const Point = styled.div`
  margin-top: 10px;
  margin-bottom: 40px;
  font-size: 30px;
  line-height: 40px;
  font-weight: bold;
`;

export const Menu = styled.div`
  margin-bottom: 0px;
  font-size: 30px;
  line-height: 50px;
  color: #bdbdbd;
  :hover {
    cursor: pointer;
    font-weight: bold;
    color: #ffd600;
  }
`;
export const WrapperRight = styled.div`
  width: 1000px;
  padding-top: 82px;
  padding-left: 40px;

  border-left: 1px solid black;
`;

export const Row = styled.div`
  width: 1000px;
  height: 20px;
  display: flex;
  flex-direction: row;
`;

export const ColumnIndex = styled.div`
  width: 10%;
  border: 1px solid;
`;

export const ColumnTitle = styled.div`
  width: 30%;
  border: 1px solid;
`;
export const ColumnIsSold = styled.div`
  width: 15%;
  color: green;
  border: 1px solid black;
`;
export const ColumnPrice = styled.div`
  width: 15%;
  border: 1px solid;
`;

export const ColumnSeller = styled.div`
  width: 15%;
  border: 1px solid;
`;
export const ColumnDate = styled.div`
  width: 15%;
  border: 1px solid;
`;
export const ColumnPointDate = styled.div`
  width: 25%;
  border: 1px solid;
`;
export const ColumnPointIdOrItem = styled.div`
  width: 25%;
  border: 1px solid;
`;
export const ColumnPointAmount = styled.div`
  width: 25%;
  border: 1px solid;
`;

export const ColumnPointBalance = styled.div`
  width: 25%;
  border: 1px solid;
`;
