import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../_app";
import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
    }
  }
`;

export default function LoginSuccessPage() {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (!accessToken) {
      alert("로그인 해주세요!");
      router.push("/market/login");
    }
  }, []);

  return (
    <>
      <div>{data?.fetchUserLoggedIn?._id}님 환영합니다</div>
      <div>{data?.fetchUserLoggedIn?.name}님 환영합니다</div>
      <div>{data?.fetchUserLoggedIn?.email}님 환영합니다</div>
    </>
  );
}
