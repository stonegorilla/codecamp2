// @ts-nocheck
import styled from "@emotion/styled";

export const MyButton = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
  width: 179px;
  height: 45px;
  margin-top: 40px;
  border: none;
  cursor: pointer;

  font-size: 16px;
`;

export default function Button01(props) {
  return (
    <MyButton
      type={props.type}
      isActive={props.isActive}
      onClick={props.gotowhere}
    >
      {props.buttonName}
    </MyButton>
  );
}
