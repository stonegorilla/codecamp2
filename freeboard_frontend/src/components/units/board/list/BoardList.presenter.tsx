import {
  Wrapper,
  Wrapper1,
  Row,
  Column,
  ColumnTitle,
  Button,
  Page,
  PageWrapper,
  BoardNewWrapper,
  TextToken,
} from "./BoardList.styles";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import Searchbars01 from "../../../commons/searchbars/Searchbars01.container";
import { getDates } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props) {
  return (
    <Wrapper>
      <Searchbars01
        refetch={props.refetch}
        onChangeKeyword={props.onChangeKeyword}
      />
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
            {/* <ColumnTitle onClick={props.onClickPage} id={data._id}>
              {data.title}
            </ColumnTitle> */}
            <ColumnTitle id={data._id} onClick={props.onClickMoveToBoardDetail}>
              {data.title
                .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                .split("@#$%")
                .map((data) => (
                  <TextToken key={uuidv4()} isMatched={props.keyword === data}>
                    {data}
                  </TextToken>
                ))}
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
      <BoardNewWrapper>
        <Button onClick={props.gotoBoardNew}>게시물 등록</Button>
      </BoardNewWrapper>
    </Wrapper>
  );
}
