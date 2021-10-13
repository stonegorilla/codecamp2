
import MyPointUI from "./MyPoint.presenter";
import { useQuery } from "@apollo/client";
import {
    FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
} from './MyPoint.queries'
export default function MyPoint(){
    const { data: fetchpointtransactionsofloading } = useQuery(
        FETCH_POINT_TRANSACTIONS_OF_LOADING
      );
      const { data: fetchpointtransactionsofbuying } = useQuery(
        FETCH_POINT_TRANSACTIONS_OF_BUYING
      );
      const { data: fetchpointtransactionsofselling } = useQuery(
        FETCH_POINT_TRANSACTIONS_OF_SELLING
      );
    return <MyPointUI 
    fetchpointtransactionsofloading={fetchpointtransactionsofloading}
      fetchpointtransactionsofbuying={fetchpointtransactionsofbuying}
      fetchpointtransactionsofselling={fetchpointtransactionsofselling}
    />
}