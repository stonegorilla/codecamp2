import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../_app";
import { gql, useQuery } from "@apollo/client";
import withAuth from "../../../src/components/commons/hocs/withAuth";
import styled from "@emotion/styled";
import { LoginJoinWrapper } from "../../../src/components/commons/layout/header/LayoutHeader.styles";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
    }
  }
`;
const FETCH_USED_ITEMS = gql`
  query fetchUseditems {
    fetchUseditems {
      _id
      name
      remarks
      contents
      price
      tags
      images
    }
  }
`;

const Row = styled.div`
  width: 1000px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  width: 25%;
`;
function LoginSuccessPage() {
  // const router = useRouter();
  // const { accessToken } = useContext(GlobalContext);
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

  const onClickBasket = (basketData) => () => {
    console.log(basketData);

    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    console.log(baskets);
    let isExists = false;
    baskets.forEach((data) => {
      if (data._id === basketData._id) isExists = true;
    });
    if (isExists) return;

    baskets.push(basketData);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  console.log(item);
  return (
    <>
      <div>{data?.fetchUserLoggedIn?._id}님 환영합니다</div>
      <div>{data?.fetchUserLoggedIn?.name}님 환영합니다</div>
      <div>{data?.fetchUserLoggedIn?.email}님 환영합니다</div>
      {item?.fetchUseditems.map((data) => (
        <Row key={data._id}>
          <Column>{data.name}</Column>
          <Column>{data.remarks}</Column>
          <Column>{data.contents}</Column>
          <Column>{data.price}</Column>
          <button onClick={onClickBasket(data)}>오늘본 상품</button>
        </Row>
      ))}
      <div>오늘본 상품</div>
      {baskets.map((data) => (
        <div key={data._id}>
          <span>{data.name}</span>
          <span>{data.remarks}</span>
        </div>
      ))}
      <span>{}</span>
    </>
  );
}

export default withAuth(LoginSuccessPage);
