// @ts-nocheck
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper1 = styled.div`
  width: 1000px;
`;
export const SearchWrapper = styled.div`
  width: 1000px;
  margin-bottom: 40px;
  display: flex;
  justify-content: left;
`;
export const BoardNewWrapper = styled.div`
  width: 1000px;
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
`;
export const Row = styled.div`
  width: 1000px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;
`;

export const RowBold = styled.div`
  width: 1000px;
  height: 40px;
  line-height: 40px;
  /* border: 1px solid grey; */
  background-color: skyblue;
  display: flex;
  flex-direction: row;
`;
export const Column = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 40%;
  cursor: pointer;
  text-align: center;

  :hover {
    color: orange;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
`;

export const Page = styled.div`
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const PageWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

export const TextToken = styled.span`
  /* props : ITextTokenProps */
  color: ${(props) => (props.isMatched ? "red" : "black")};
`;
