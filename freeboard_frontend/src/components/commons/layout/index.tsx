import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";

const Body = styled.div`
  height: 500px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Layout(props: any) {
  return (
    <>
      <LayoutHeader />

      <LayoutBanner />
      <LayoutNavigation />
      <Wrapper>
        <Body>{props.children} </Body>
      </Wrapper>

      {/* <LayoutFooter /> */}
    </>
  );
}
