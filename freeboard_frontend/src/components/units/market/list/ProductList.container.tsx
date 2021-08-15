import MarketListUI from "./ProductList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { FETCH_USER_LOGGED_IN, FETCH_USED_ITEMS } from "./ProductList.queries";
export default function MarketList() {
  const router = useRouter();

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const { data: item } = useQuery(FETCH_USED_ITEMS);
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
  return (
    <MarketListUI
      data={data}
      item={item}
      baskets={baskets}
      onClickBasket={onClickBasket}
      aaa={aaa}
      detail={detail}
    />
  );
}
