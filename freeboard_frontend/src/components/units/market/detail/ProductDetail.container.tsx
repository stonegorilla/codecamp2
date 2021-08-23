import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_USED_ITEMS_I_PICKED,
  TOGGLE_USED_ITEM_PICK,
  DELETE_USED_ITEM,
} from "./ProductDetail.queries";
import { useState } from "react";
import { useEffect } from "react";

export default function ProductDetail() {
  const router = useRouter();
  const [istoggled, setIstoggled] = useState(false);
  const [toggleitem] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [deleteuseditem] = useMutation(DELETE_USED_ITEM);
  const [createpointtransactionofbuyingandselling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.bbb,
    },
  });
  const { data: isToggled, loading } = useQuery(FETCH_USED_ITEMS_I_PICKED);

  console.log(isToggled, loading);

  useEffect(() => {
    for (var i = 0; i < isToggled?.fetchUseditemsIPicked.length; i++) {
      if (isToggled?.fetchUseditemsIPicked[i]._id === router.query.bbb) {
        setIstoggled(true);
      } else {
      }
    }
    // if (isToggled?.fetchUseditemsIPicked && data?.fetchUseditem) {
    //   isToggled?.fetchUseditemsIPicked.forEach((el) => {
    //     if (data?.fetchUseditem._id === el._id) {
    //       setIstoggled(true);
    //     }
    //   });
    // }
  }, [loading]);

  // console.log(isToggled?.fetchUseditemsIPicked[3]._id);
  // useEffect(() => {
  //   async function aaa() {
  //     const result = await toggleitem({
  //       variables: { useditemId: router.query.bbb },
  //     });
  //     const result2 = await toggleitem({
  //       variables: { useditemId: router.query.bbb },
  //     });
  //     setIstoggled(result2.data.toggleUseditemPick);
  //   }
  // aaa();
  // if (istoggled === false) {

  // isToggled?.fetchUseditemsIPicked.forEach((picked) => {
  //   return picked._id === router.query.bbb && setIstoggled(true);
  // });

  //   for (var i = 0; i < isToggled?.fetchUseditemsIPicked.length; i++) {
  //     if (isToggled?.fetchUseditemsIPicked[i]._id === router.query.bbb) {
  //       setIstoggled(true);

  //     } else {

  //     }
  //   }
  // } else {
  // }
  // }
  // }, []);

  // console.log(istoggled);

  const gotoMain = () => {
    router.push("/market/list");
  };

  const toggle = async () => {
    const result = await toggleitem({
      variables: { useditemId: router.query.bbb },
    });
    console.log(result.data.toggleUseditemPick);
    if (istoggled) setIstoggled(false);
    if (!istoggled) setIstoggled(true);
    // console.log(isToggled);
  };

  const gotodelete = async () => {
    try {
      await deleteuseditem({
        variables: { useditemId: router.query.bbb },
      });
      alert("삭제잘하셨어요");
      router.push("/market/list");
    } catch (error) {
      alert(error.message);
    }
  };

  const gotoupdate = async () => {
    router.push(`/market/detail/${router.query.bbb}/edit`);
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
  // console.log(router.query.bbb);
  // console.log(data);
  return (
    <ProductDetailUI
      data={data}
      gotoMain={gotoMain}
      purchase={purchase}
      istoggled={istoggled}
      toggle={toggle}
      gotodelete={gotodelete}
      gotoupdate={gotoupdate}
    />
  );
}
