import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
// import { GlobalContext } from "../../../../pages/_app";

const withAuth = (Component: ComponentType) => (props: any) => {
  const router = useRouter();

  // const { accessToken } = useContext(GlobalContext);

  // setAccessToken("aaa");
  // console.log(accessToken);
  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      alert("로그인이 필요한 페이지 입니다.");
      router.push("/market/login");
    }
  }, []);

  return <Component {...props} />;
};

export default withAuth;
