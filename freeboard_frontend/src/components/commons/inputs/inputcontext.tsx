import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Input = styled.textarea`
  width: 996px;
  height: 480px;
`;

export const Name = styled.div`
  font-size: 16px;
`;
export const NameRed = styled.div`
  color: red;
  font-size: 16px;
`;

export default function InputContent(props) {
  return (
    <>
      <Wrapper>
        <Name>{props.inputName}:</Name>
        <NameRed>{props.errorMessage}</NameRed>
      </Wrapper>
      <Input type={props.type} {...props.register} />
    </>
  );
}
