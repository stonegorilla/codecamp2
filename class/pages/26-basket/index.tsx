import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

const Column = styled.span`
  padding-left: 50px;
  padding-right: 50px;
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickBasket = (basketData) => () => {
    console.log(basketData);
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    let isExists = false;
    baskets.forEach((data) => {
      if (data._id === basketData._id) isExists = true;
    });
    if (isExists) return;

    // baskets = baskets.filter((data) => data._id !== basketData._id);
    // const newBaskets = [];
    // newBaskets.push();
    // console.log(baskets);
    baskets.push(basketData);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onClickLogin = () => {
    router.push("/26-basket-logged-in");
  };
  return (
    <div>
      {data?.fetchBoards.map((data, index) => (
        <div key={data._id}>
          <Column>{index + 1}</Column>
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
          <button onClick={onClickBasket(data)}>장바구니담기</button>
        </div>
      ))}
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}
