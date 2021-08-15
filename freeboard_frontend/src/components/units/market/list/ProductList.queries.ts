import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems {
    fetchUseditems {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      seller {
        name
      }
      buyer {
        name
      }
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
    }
  }
`;

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation tU($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
