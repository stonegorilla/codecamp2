import {
  Wrapper,
  Wrapper1,
  Row,
  Column,
  ColumnTitle,
  Button,
  Page,
  PageWrapper,
} from "./BoardList.styles";

import { getDates } from "../../../../commons/libraries/utils";

export default function BoardListUI(props) {
  return (
    <Wrapper>
      <Wrapper1>
        <Row>
          <Column>
            <input type="checkbox" />
          </Column>
          {/* <Column>번호</Column> */}
          <Column>작성자</Column>
          <Column>제목</Column>
          {/* <span>{data.contents}</span> */}
          <Column>작성일</Column>
        </Row>
        {props.qqq?.fetchBoards.map((data, index) => (
          <Row key={data._id}>
            <Column>
              <input type="checkbox" />
            </Column>
            {/* <Column>{index}</Column> */}
            <Column>{data.writer}</Column>
            <ColumnTitle onClick={props.onClickPage} id={data._id}>
              {data.title}
            </ColumnTitle>
            {/* 이벤트 핸들러 함수 */}
            {/* <span>{data.contents}</span> */}
            <Column>{getDates(data.createdAt)}</Column>
            <Column>
              <Button id={data._id} onClick={props.Delete}>
                삭제하기
              </Button>
            </Column>
          </Row>
        ))}
      </Wrapper1>
      <PageWrapper>
        <Page onClick={props.onClickPrevPage}>이전</Page>
        {[1, 1, 1, 4, 5, 6, 7, 8, 9, 10].map((_, index) => {
          const currentPage = props.startPage + index;
          return (
            currentPage <= props.lastPage && (
              <Page
                key={props.startPage + index}
                onClick={props.onClickPageNumber}
                id={String(props.startPage + index)}
              >
                {props.startPage + index}
              </Page>
            )
          );
        })}

        <Page onClick={props.onClickNextPage}>다음</Page>
      </PageWrapper>
    </Wrapper>
  );
}
