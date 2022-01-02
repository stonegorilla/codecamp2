import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 1200px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/marketpage/aurora4.jpg");
`;

export const EmailPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
`;

export const Text = styled.div`
  width: 500px;
  font-size: 16px;
  font-weight: bold;
`;

export const TextError = styled.div`
  width: 500px;
  font-size: 16px;
  color: red;
`;
export const Email = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(120, 120, 120, 0.5);
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 16px;
  transition: 5s;
  :hover {
    transition: 2s;
    background-color: #5cd1e5;
    color: #000;
    outline: none;
    box-shadow: 1px 1px 8px;
  }
`;
export const Password = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(120, 120, 120, 0.5);
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 16px;
  transition: 5s;

  :hover {
    transition: 2s;
    background-color: #ffd600;
    color: #000;
    outline: none;
    box-shadow: 1px 1px 8px;
  }
`;

export const SubmitButton = styled.button`
  width: 384px;
  height: 64px;
  margin-top: 40px;
  cursor: pointer;
  background-color: #4f4f4f;
  border-radius: 16px;
  border: none;
  color: #bdbdbd;
  font-weight: bold;
  font-size: 16px;
  transition: 0.5s;
  :hover {
    transition: 0.5s;
    width: 600px;
    height: 100px;
    background-color: #ffd600;
    color: #000;
  }
`;
