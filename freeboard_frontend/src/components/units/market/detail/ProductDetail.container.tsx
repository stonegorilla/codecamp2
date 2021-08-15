import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
export default function ProductDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.bbb,
    },
  });

  const gotoMain = () => {
    router.push("/market/list");
  };
  if (typeof window === "undefined") return <></>;
  console.log(router.query.bbb);
  console.log(data);
  return <ProductDetailUI data={data} gotoMain={gotoMain} />;
}
