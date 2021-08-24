import ProductWrite from "../../../../../src/components/units/market/new/ProductWrite.container";

import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { createContext } from "react";

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

interface IContext {
  isEdit?: boolean;
}
export const MarketEditPageContext = createContext<IContext>({});
export default function MarketEditPage() {
  // const isEdit = true;
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.bbb,
    },
  });
  const value = {
    isEdit: true,
    data,
  };

  return (
    <MarketEditPageContext.Provider value={value}>
      <ProductWrite />
    </MarketEditPageContext.Provider>
  );
}
