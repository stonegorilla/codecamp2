import { gql } from "@apollo/client";

export const FETCHPOINT = gql`
  query fetchPoint {
    fetchUserLoggedIn {
      name
      userPoint {
        amount
      }
    }
  }
`;

export const FETCH_USED_ITEMS_I_SOLD = gql`
  query fetchUseditemsISold {
    fetchUseditemsISold {
      _id
      name
      soldAt
      createdAt
      price
      seller {
        name
      }
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

export const FETCH_USED_ITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought {
    fetchUseditemsIBought {
      _id
      name
      soldAt
      createdAt
      buyer {
        name
      }
      price
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTranscationsOfLoading {
    fetchPointTransactionsOfLoading {
      _id
      createdAt
      impUid
      amount
      balance
      status
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying {
    fetchPointTransactionsOfBuying {
      _id
      createdAt
      useditem {
        name
      }
      amount
      balance
    }
  }
`;
export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTranscationsOfSelling {
    fetchPointTransactionsOfSelling {
      _id
      createdAt
      useditem {
        name
      }
      amount
      balance
    }
  }
`;
