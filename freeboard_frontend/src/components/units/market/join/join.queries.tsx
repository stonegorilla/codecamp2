import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($aaa: CreateUserInput!) {
    createUser(createUserInput: $aaa) {
      _id
    }
  }
`;
