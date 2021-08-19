import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_USED_ITEMS_I_PICKED,
} from "./ProductDetail.queries";
import { useState } from "react";

export default function ProductDetail() {
  const router = useRouter();

  const [istoggled, setIstoggled] = useState(false);
  const [createpointtransactionofbuyingandselling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.bbb,
    },
  });
  const { data: isToggled } = useQuery(FETCH_USED_ITEMS_I_PICKED);

  // console.log(isToggled?.fetchUseditemsIPicked[3]._id);
  if (istoggled === false) {
    for (var i = 0; i < isToggled?.fetchUseditemsIPicked.length; i++) {
      if (isToggled?.fetchUseditemsIPicked[i]._id === router.query.bbb) {
        setIstoggled(true);
      }
    }
  }
  console.log(istoggled);
  // console.log(istoggled);

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
    <ProductDetailUI
      data={data}
      gotoMain={gotoMain}
      purchase={purchase}
      istoggled={istoggled}
    />
  );
}
