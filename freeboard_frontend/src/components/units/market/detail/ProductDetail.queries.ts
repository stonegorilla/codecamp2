import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      seller {
        name
      }
      buyer {
        name
      }

      useditemAddress {
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation cP($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      name
    }
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

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation tU($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
