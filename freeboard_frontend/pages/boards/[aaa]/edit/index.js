import BoardWrite from "../../../../src/components/units/board/new/BoardWrite.container";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($aaa: ID!) {
    fetchBoard(boardId: $aaa) {
      writer
      title
      contents
      youtubeUrl
    }
  }
`;

export default function EditPage() {
  const isEdit = true;
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      aaa: router.query.aaa,
    },
  });

  return <BoardWrite isEdit={isEdit} data={data} />;
}
