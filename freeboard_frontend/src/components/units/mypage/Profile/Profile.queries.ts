
import { gql } from "@apollo/client";

export const CHANGE_PASSWORD = gql`
  mutation ($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
      email
      name
    }
  }
`;
