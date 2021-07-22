import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
const FETCH_BOARDS = gql`
  query fetchBoards($aaa: Int) {
    fetchBoards(page: $aaa) {
      _id
      writer
      title
    }
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
    variables: { aaa: startPage },
  });

  function onClickPage(event) {
    refetch({ aaa: Number(event.target.id) });
  }

  function onClickPrevPage() {
    setStartPage((prev) => prev - 10);
  }
  function onClickNextPage() {
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
      {[1, 1, 1, 4, 5, 6, 7, 8, 9, 10].map((data, index) => (
        <Page
          key={startPage + index}
          onClick={onClickPage}
          id={startPage + index}
        >
          {startPage + index}
        </Page>
      ))}
      <Page onClick={onClickNextPage}>다음</Page>
    </div>
  );
}
