import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchPoint {
    fetchUserLoggedIn {
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;
