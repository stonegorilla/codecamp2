import styled from "@emotion/styled";

export const Column = styled.span`
  margin: 0px 50px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
`;
export const PageWrapper = styled.div`
  width: 30px;
  height: 30px;
`;
export const Page = styled.div`
  margin: 0px 10px;
  font-size: 16px;
  color: ${(props: IPageProps) => (props.isActive ? "blue" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};

  :hover {
    font-size: 20px;
    color: red;
  }
`;
