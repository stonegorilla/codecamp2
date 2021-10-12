import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
//dmddmdmddm
import MyPageUI from "./MyPage.presenter";
import {
  FETCHPOINT,
  FETCH_USED_ITEMS_I_PICKED,
  FETCH_USED_ITEMS_I_SOLD,
  FETCH_USED_ITEMS_I_BOUGHT,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
} from "./MyPage.queries";
export default function MyPage() {
  const router = useRouter();
  const { data } = useQuery(FETCHPOINT);
  const { data: fetchuseditemsisold } = useQuery(FETCH_USED_ITEMS_I_SOLD);
  const { data: fetchuseditemsipicked } = useQuery(FETCH_USED_ITEMS_I_PICKED);
  const { data: fetchuseditemsibought } = useQuery(FETCH_USED_ITEMS_I_BOUGHT);
  const { data: fetchpointtransactionsofloading } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_LOADING
  );
  const { data: fetchpointtransactionsofbuying } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_BUYING
  );
  const { data: fetchpointtransactionsofselling } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_SELLING
  );
  const charge = () => {
    router.push("/mypage/charge");
  };

  const userchange = () => {
    router.push("/mypage/userchange");
  };
  const changepassword = () => {
    router.push("/mypage/changepassword");
  };
  return (
    <MyPageUI
      data={data}
      charge={charge}
      fetchuseditemsisold={fetchuseditemsisold}
      fetchuseditemsipicked={fetchuseditemsipicked}
      fetchuseditemsibought={fetchuseditemsibought}
      fetchpointtransactionsofloading={fetchpointtransactionsofloading}
      fetchpointtransactionsofbuying={fetchpointtransactionsofbuying}
      fetchpointtransactionsofselling={fetchpointtransactionsofselling}
      userchange={userchange}
      changepassword={changepassword}
    />
  );
}
