import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 120px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: yellowgreen; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  /* background-color: yellow; */
  height: 100%;
  line-height: 100px;
  font-size: 100px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;
export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  /* background-color: green; */
  line-height: 80px;
  font-size: 50px;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;
