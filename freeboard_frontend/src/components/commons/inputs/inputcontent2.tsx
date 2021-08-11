import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Input = styled.textarea`
  width: 0px;
  height: 0px;
`;

export const Name = styled.div`
  font-size: 16px;
`;
export const NameRed = styled.div`
  color: red;
  font-size: 16px;
`;
export const Aaa = styled(ReactQuill)`
  width: 996px;
  height: 480px;
`;
export default function InputContent2(props) {
  return (
    <>
      <Wrapper>
        <Name>{props.inputName}:</Name>
        <NameRed>{props.errorMessage}</NameRed>
      </Wrapper>
      <Aaa onChange={props.aaa} />
    </>
  );
}
