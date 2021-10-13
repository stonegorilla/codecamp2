import MyPointUI from "./MyPoint.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
} from "./MyPoint.queries";
import { useState } from "react";
export default function MyPoint() {
  const { data: fetchpointtransactionsofloading } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_LOADING
  );
  const { data: fetchpointtransactionsofbuying } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_BUYING
  );
  const { data: fetchpointtransactionsofselling } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_SELLING
  );

  const [Loading, setLoading] = useState(true);
  const [Buying, setBuying] = useState(false);
  const [Selling, setSelling] = useState(false);

  const ClickLoading = () => {
    setLoading(true);
    setBuying(false);
    setSelling(false);
  };
  const ClickBuying = () => {
    setLoading(false);
    setBuying(true);
    setSelling(false);
  };
  const ClickSelling = () => {
    setLoading(false);
    setBuying(false);
    setSelling(true);
  };
  return (
    <MyPointUI
      fetchpointtransactionsofloading={fetchpointtransactionsofloading}
      fetchpointtransactionsofbuying={fetchpointtransactionsofbuying}
      fetchpointtransactionsofselling={fetchpointtransactionsofselling}
      Loading={Loading}
      Buying={Buying}
      Selling={Selling}
      ClickLoading={ClickLoading}
      ClickBuying={ClickBuying}
      ClickSelling={ClickSelling}
    />
  );
}
