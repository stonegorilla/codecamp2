import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 130px;
`;
export const WrapperLeft = styled.div`
  width: 330px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 50px;
  line-height: 100px;

  font-weight: bold;
`;

export const Picture = styled.img`
  margin-top: 40px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Name = styled.div`
  font-size: 35px;
  line-height: 70px;
  color: #ffd600;
  font-weight: bold;
`;
export const Point = styled.div`
  margin-top: 10px;
  margin-bottom: 40px;
  font-size: 30px;
  line-height: 40px;
  font-weight: bold;
`;

export const Menu01 = styled.div`
  margin-bottom: 0px;
  font-size: 30px;
  line-height: 50px;
  color: ${(props: any) => (props.isActive01 ? "#ffd400" : "#bdbdbd")};
  :hover {
    cursor: pointer;
    font-weight: bold;
    color: #ffd600;
  }
`;
export const Menu02 = styled.div`
  margin-bottom: 0px;
  font-size: 30px;
  line-height: 50px;
  color: ${(props: any) => (props.isActive02 ? "#ffd400" : "#bdbdbd")};
  :hover {
    cursor: pointer;
    font-weight: bold;
    color: #ffd600;
  }
`;
export const Menu03 = styled.div`
  margin-bottom: 0px;
  font-size: 30px;
  line-height: 50px;
  color: ${(props: any) => (props.isActive03 ? "#ffd400" : "#bdbdbd")};
  :hover {
    cursor: pointer;
    font-weight: bold;
    color: #ffd600;
  }
`;
export const WrapperRight = styled.div`
  width: 1000px;
  padding-top: 82px;
  padding-left: 40px;

  border-left: 1px solid black;
`;
