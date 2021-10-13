import { gql } from "@apollo/client";


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