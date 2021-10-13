import { gql } from "@apollo/client";
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