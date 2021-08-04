import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* opacity: 0.8; */
  background: #000 url("/images/boards/login/background.png");
`;

export const Background = styled.div``;

export const Signup = styled.div`
  width: 384px;
  height: 510px;
`;

export const Signup__Title = styled.div`
  margin-bottom: 40px;
  height: 44px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 28px;
  line-height: 40px;
  color: #fff;
`;

export const Information = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

export const Email__Title = styled.div`
  margin-bottom: 12px;
`;

export const Email__Input = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  border-radius: 16px;
  margin-bottom: 20px;
  padding-left: 16px;
  :focus {
    outline: none;
    box-shadow: 1px 1px 8px;
  }
`;

export const Name__Title = styled.div`
  margin-bottom: 12px;
`;

export const Name__Input = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  border-radius: 16px;
  margin-bottom: 20px;
  padding-left: 16px;
  :focus {
    outline: none;
    box-shadow: 1px 1px 8px;
  }
`;

export const Password__Title = styled.div`
  margin-bottom: 12px;
`;

export const Password__Input = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  border-radius: 16px;
  margin-bottom: 20px;
  padding-left: 16px;
  :focus {
    outline: none;
    box-shadow: 1px 1px 8px;
  }
`;

export const Password2__Title = styled.div`
  margin-bottom: 12px;
`;

export const Password2__Input = styled.input`
  width: 384px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  border-radius: 16px;
  margin-bottom: 60px;
  padding-left: 16px;
  :focus {
    outline: none;
    box-shadow: 1px 1px 8px;
  }
`;

export const Signup__Button = styled.button`
  width: 384px;
  height: 64px;
  background-color: #4f4f4f;
  border-radius: 16px;
  border: none;
  color: #bdbdbd;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 40px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transition: 0.3s;
    background-color: #ffd600;
    color: #000;
  }
`;
