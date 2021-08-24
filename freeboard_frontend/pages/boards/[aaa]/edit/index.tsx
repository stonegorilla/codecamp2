import BoardWrite from "../../../../src/components/units/board/new/BoardWrite.container";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { createContext } from "react";

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

interface IContext {
  isEdit?: boolean;
}
export const BoardsEditPageContext = createContext<IContext>({});
export default function EditPage() {
  // const isEdit = true;
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      aaa: router.query.aaa,
    },
  });
  const value = {
    isEdit: true,
    data,
  };

  return (
    <BoardsEditPageContext.Provider value={value}>
      <BoardWrite />
    </BoardsEditPageContext.Provider>
  );
}
