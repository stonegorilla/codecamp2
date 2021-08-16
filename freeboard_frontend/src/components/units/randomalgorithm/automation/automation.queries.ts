import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($aaa: CreateUserInput!) {
    createUser(createUserInput: $aaa) {
      _id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation tU($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
