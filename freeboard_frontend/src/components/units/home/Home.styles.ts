import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 300px;

  background-color: #111;
  width: 1920px;
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Box = styled.div`
  text-decoration: none;
  width: 400px;
  height: 100px;
  margin-top: 30px;

  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  text-align: left;
  padding-left: 20px;
  transform: rotate(-30deg) skewX(25deg) translate(0, 0);
  transition: 0.5s;
  box-shadow: -20px 20px 10px rgba(255, 255, 255, 0.5);

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.color};
    transform: rotate(-30deg) skew(25deg) translate(20px, -15px);
    box-shadow: -50px 50px 50px rgba(255, 255, 255, 0.5);

    :before {
      background: ${(props) => props.color};
    }
    :after {
      background: ${(props) => props.color};
    }
  }
  :before {
    content: "";
    position: absolute;
    top: 10px;
    left: -20px;
    height: 100%;
    width: 20px;
    background-color: #b1b1b1;
    transform: 0.5s;
    transform: rotate(0deg) skewY(-45deg);
  }

  :after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: -10px;
    height: 20px;
    width: 100%;
    background: #b1b1b1;
    transform: 0.5s;
    transform: rotate(0deg) skewX(-45deg);
  }
`;

export const Navi = styled.span`
  font-size: 24px;
  color: #000;
  padding: 40px;
  transition: 0.5s;
  :hover {
    color: #fff;
    transition: 0.5s;
  }
`;
