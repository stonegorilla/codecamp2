import { gql } from "@apollo/client";

export const CHANGE_PASSWORD = gql`
  mutation ($password: String!) {
    resetUserPassword(password: $password)
  }
`;
