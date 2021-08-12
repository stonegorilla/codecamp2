import { gql } from "@apollo/client";

export const FETCHPOINT = gql`
  query fetchPoint {
    fetchUserLoggedIn {
      userPoint {
        amount
      }
    }
  }
`;
