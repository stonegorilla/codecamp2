import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";

const Body = styled.div`
  width: 100%;
  height: 100%;
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
