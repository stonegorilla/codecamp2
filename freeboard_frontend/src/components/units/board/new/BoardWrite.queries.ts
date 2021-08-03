import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($aaa: CreateBoardInput!) {
    createBoard(createBoardInput: $aaa) {
      _id
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $boardId: ID!
    $password: String
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(
      boardId: $boardId
      password: $password
      updateBoardInput: $updateBoardInput
    ) {
      _id
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($bbb: Upload!) {
    uploadFile(file: $bbb) {
      url
    }
  }
`;
