import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
    }
  }
`;

export const CREATE_BOARD_COMMENT = gql`
  mutation cb($cBC: CreateBoardCommentInput!, $boardId: ID!) {
    createBoardComment(createBoardCommentInput: $cBC, boardId: $boardId) {
      _id
    }
  }
`;

export const UPDATE_BOARD_COMMENT = gql`
  mutation ub(
    $uBC: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $uBC
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
    }
  }
`;
export const DELETE_BOARD_COMMENT = gql`
  mutation db($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;
