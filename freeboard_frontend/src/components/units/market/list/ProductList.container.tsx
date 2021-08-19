import MarketListUI from "./ProductList.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import {
  FETCH_USER_LOGGED_IN,
  FETCH_USED_ITEMS,
  TOGGLE_USED_ITEM_PICK,
  FETCH_USED_ITEM_OF_THE_BEST,
  FETCH_USED_ITEMS_I_PICKED,
} from "./ProductList.queries";
export default function MarketList() {
  const router = useRouter();
  const [istoggled, setIstoggled] = useState(false);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const { data: item, refetch } = useQuery(FETCH_USED_ITEMS);
  const { data: best } = useQuery(FETCH_USED_ITEM_OF_THE_BEST);
  const [toggleitem] = useMutation(TOGGLE_USED_ITEM_PICK);
  const { data: isToggled } = useQuery(FETCH_USED_ITEMS_I_PICKED);
  const [baskets, setBaskets] = useState([]);
  // useEffect(() => {
  //   if (!accessToken) {
  //     alert("로그인 해주세요!");
  //     router.push("/market/login");
  //   }
  // }, []);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(items);
    console.log(items);
  }, []);

  const onClickBasket = (basketData) => (event) => {
    console.log(basketData);

    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    console.log(baskets);
    let isExists = false;
    baskets.forEach((data) => {
      if (data._id === basketData._id) isExists = true;
    });
    if (isExists) {
      router.push(`/market/detail/${event.target.id}`);
      return;
    }

    baskets.push(basketData);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    router.push(`/market/detail/${event.target.id}`);
  };

  const aaa = () => {
    router.push("/market/new");
  };

  const detail = (event) => {
    router.push(`/market/detail/${event.target.id}`);
  };

  const toggle = async (event) => {
    await toggleitem({
      variables: { useditemId: event.target.id },
      refetchQueries: [
        {
          query: FETCH_USED_ITEMS,
        },
      ],
    });
  };
  console.log(best);
  console.log(best?.fetchUseditemsOfTheBest[0].images[0]);
  return (
    <MarketListUI
      data={data}
      item={item}
      best={best}
      baskets={baskets}
      istoggled={istoggled}
      onClickBasket={onClickBasket}
      aaa={aaa}
      detail={detail}
      toggle={toggle}
    />
  );
}
