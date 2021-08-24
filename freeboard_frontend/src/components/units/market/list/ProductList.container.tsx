// @ts-nocheck
import MarketListUI from "./ProductList.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import {
  FETCH_USER_LOGGED_IN,
  FETCH_USED_ITEMS,
  TOGGLE_USED_ITEM_PICK,
  FETCH_USED_ITEM_OF_THE_BEST,
} from "./ProductList.queries";
export default function MarketList() {
  const router = useRouter();
  const hasMore = true;
  const istoggled = false;
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: item, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const { data: best } = useQuery(FETCH_USED_ITEM_OF_THE_BEST);
  const [toggleitem] = useMutation(TOGGLE_USED_ITEM_PICK);
  // const { data: isToggled } = useQuery(FETCH_USED_ITEMS_I_PICKED);
  const [baskets, setBaskets] = useState([]);
  // 징바구니는 처음에 배열로 선언해 놓을 것
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
  // 참고로 useEffct 안은 처음 페이지가 렌더링이 될때 실행이 된다.
  // localStorage에 있는 것들을 json 객체로 변환시켜 items에 담아둔다. 없으면 빈 배열을 담아둔다.

  const onLoadMore = () => {
    if (!item) return;
    fetchMore({
      variables: {
        page: Math.floor(item?.fetchUseditems.length) / 10 + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        // if (prev.fetchUseditems.length > 100) setHasMore(false);
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  // 아래는 화살표 함수의 장점이 드러나는 방식이다. 이것도 HOF 방식이다.
  // presenter에서 onClick = onClickBasket(basketData) 라고 선언된 부분이 있을 것이다.
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
      hasMore={hasMore}
      onClickBasket={onClickBasket}
      aaa={aaa}
      detail={detail}
      toggle={toggle}
      onLoadMore={onLoadMore}
    />
  );
}
