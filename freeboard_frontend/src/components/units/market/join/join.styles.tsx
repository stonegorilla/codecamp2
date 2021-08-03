import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IdPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
`;

export const Text = styled.div`
  width: 384px;
  font-size: 16px;
`;

export const TextError = styled.div`
  width: 500px;
  height: 50px;
  font-size: 16px;
  color: red;
`;
export const Email = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(120, 120, 120, 0.05);
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 16px;
`;

export const Name = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(120, 120, 120, 0.05);
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 16px;
`;
export const Password = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(120, 120, 120, 0.05);
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 16px;
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 60px;
`;
