import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;
export const Calculator = styled.div`
  width: 287px;
  border: 1px solid #333;
  background-color: #ccc;
  padding: 5px;
  font-size: 19px;
`;
export const CalculatorForm = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-auto-rows: 65px;
  grid-gap: 5px;
`;
export const Output = styled.input`
  grid-column: span 4;
  padding: 0 10px;
  border: 2px solid #333;
  text-align: right;
  :hover {
    box-shadow: 1px 1px 2px #333;
  }
`;
export const Clear = styled.input`
  grid-column: span 3;
  border: 2px solid #333;
  :hover {
    box-shadow: 1px 1px 2px #333;
  }
  background-color: #ed4848;
`;
export const Operator = styled.input`
  border: 2px solid #333;
  :hover {
    box-shadow: 1px 1px 2px #333;
  }
  background-color: orange;
`;
export const OperatorResult = styled.input`
  grid-column: span 2;
  border: 2px solid #333;
  :hover {
    box-shadow: 1px 1px 2px #333;
  }
  background-color: orange;
`;
export const Dot = styled.input`
  border: 2px solid #333;
  :hover {
    box-shadow: 1px 1px 2px #333;
  }
  background-color: green;
`;
export const Number = styled.input`
  border: 2px solid #333;
  :hover {
    box-shadow: 1px 1px 2px #333;
  }
`;
export const List = styled.div`
  cursor: pointer;

  :hover {
    color: blue;
  }
`;
