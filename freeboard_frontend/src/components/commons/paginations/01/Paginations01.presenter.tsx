import { Page, PageWrapper, Wrapper } from "./Paginations01.styles";
import { IPaginations01UIProps } from "./Paginations01.types";

export default function Paginations01UI(props: IPaginations01UIProps) {
  return (
    <Wrapper>
      <PageWrapper>
        <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      </PageWrapper>

      {new Array(10).fill(1).map((_, index) => {
        const currentPage = props.startPage + index;
        return (
          currentPage <= props.lastPage && (
            <PageWrapper>
              <Page
                key={currentPage}
                onClick={props.onClickPage}
                id={String(currentPage)}
                isActive={currentPage === props.activedPage}
              >
                {currentPage}
              </Page>
            </PageWrapper>
          )
        );
      })}
      <PageWrapper>
        <Page onClick={props.onClickNextPage}>{`>`}</Page>
      </PageWrapper>
    </Wrapper>
  );
}
