import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Column = styled.span`
  margin: 0px 50px;
`;

const Page = styled.span`
  margin: 0px 10px;
  cursor: pointer;
`;
export default function PagenationPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: pageBoardCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(Number(pageBoardCount?.fetchBoardsCount) / 10);

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    refetch({ page: Number(event.target as Element).id });
  }

  function onClickPrevPage() {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
  }
  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }
  return (
    <div>
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
        </div>
      ))}
      <Page onClick={onClickPrevPage}>이전</Page>
      {[1, 1, 1, 4, 5, 6, 7, 8, 9, 10].map((_, index) => {
        const currentPage = startPage + index;
        return (
          currentPage <= lastPage && (
            <Page
              key={startPage + index}
              onClick={onClickPage}
              id={String(startPage + index)}
            >
              {startPage + index}
            </Page>
          )
        );
      })}
      <Page onClick={onClickNextPage}>다음</Page>
    </div>
  );
}
