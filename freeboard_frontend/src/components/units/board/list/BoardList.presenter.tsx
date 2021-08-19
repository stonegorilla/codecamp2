import {
  Wrapper,
  Wrapper1,
  Row,
  RowBold,
  Column,
  ColumnTitle,
  Button,
  Page,
  PageWrapper,
  BoardNewWrapper,
  TextToken,
  SearchWrapper,
} from "./BoardList.styles";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import Searchbars01 from "../../../commons/searchbars/Searchbars01.container";
import { getDates } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";

export interface ITextTokenProps {
  isMatched: boolean;
}

export default function BoardListUI(props) {
  return (
    <Wrapper>
      <SearchWrapper>
        <Searchbars01
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
      </SearchWrapper>

      <Wrapper1>
        <RowBold>
          <Column>
            <b>번호</b>
          </Column>
          {/* <Column>번호</Column> */}
          <Column>
            <b>작성자</b>
          </Column>
          <ColumnTitle>
            <b>제목</b>
          </ColumnTitle>
          {/* <span>{data.contents}</span> */}
          <Column>
            <b>작성일</b>
          </Column>
        </RowBold>
        {props.qqq?.fetchBoards
          .filter((data) => data.title.includes(props.keyword))
          .map((data, index) => (
            <Row key={data._id}>
              <Column>{index + 1}</Column>

              <Column>{data.writer}</Column>
              <ColumnTitle onClick={props.onClickPage} id={data._id}>
                {data.title}
              </ColumnTitle>

              {/* 이벤트 핸들러 함수 */}
              {/* <span>{data.contents}</span> */}
              <Column>{getDates(data.createdAt)}</Column>
            </Row>
          ))}
      </Wrapper1>
      <PageWrapper>
        {/* <Page onClick={props.onClickPrevPage}>이전</Page>
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

        <Page onClick={props.onClickNextPage}>다음</Page> */}
        <Paginations01
          refetch={props.refetch}
          count={props.pageBoardCount?.fetchBoardsCount}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
        />
      </PageWrapper>

      <BoardNewWrapper>
        <Button onClick={props.gotoBoardNew}>게시물 등록</Button>
      </BoardNewWrapper>
    </Wrapper>
  );
}
