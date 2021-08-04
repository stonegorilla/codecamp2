import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  height: 1200px;
  padding-top: 100px;
  padding-bottom: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/marketpage/aurora4.jpg");
  /* background-size: 100%; */
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
  font-weight: bold;
`;

export const TextError = styled.div`
  width: 500px;
  /* height: 50px; */
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
  outline: none;
  transition: 5s;
  :hover {
    transition: 2s;
    background-color: #5cd1e5;
    color: #000;
    outline: none;
    box-shadow: 1px 1px 8px;
  }
`;

export const Name = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(120, 120, 120, 0.5);
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 16px;
  outline: none;
  transition: 5s;
  :hover {
    transition: 2s;
    background-color: #ff5e00;
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
  outline: none;
  transition: 5s;
  /* :focus {
    
  } */
  :hover {
    transition: 2s;
    background-color: #ffd600;
    color: #000;
    outline: none;
    box-shadow: 1px 1px 8px;
  }
`;

export const RePassword = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(120, 120, 120, 0.5);
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 16px;
  outline: none;
  transition: 5s;
  :hover {
    transition: 2s;
    background-color: #1ddb16;
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
  transition: 2s;
  :hover {
    transition: 3s;
    margin-top: 100px;
    margin-left: 1000px;
    background-color: #ffd600;
    color: #000;
  }
`;
