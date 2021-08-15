import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING } from "./ProductDetail.queries";
export default function ProductDetail() {
  const router = useRouter();
  const [createpointtransactionofbuyingandselling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.bbb,
    },
  });

  const gotoMain = () => {
    router.push("/market/list");
  };

  const purchase = async () => {
    try {
      await createpointtransactionofbuyingandselling({
        variables: {
          useritemId: router.query.bbb,
        },
      });
      alert("정말 잘사셨어요");
    } catch (error) {
      alert(error.message);
    }
  };
  if (typeof window === "undefined") return <></>;
  console.log(router.query.bbb);
  console.log(data);
  return (
    <ProductDetailUI data={data} gotoMain={gotoMain} purchase={purchase} />
  );
}
