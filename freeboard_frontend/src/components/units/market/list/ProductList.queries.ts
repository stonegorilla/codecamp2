import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
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
export const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked {
    fetchUseditemsIPicked {
      _id
      name
      soldAt
      createdAt
      seller {
        name
      }
      price
    }
  }
`;
export const FETCH_USED_ITEM_OF_THE_BEST = gql`
  query fuiotb {
    fetchUseditemsOfTheBest {
      name
      images
    }
  }
`;
