import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MyPageUI from "./MyPage.presenter";
import { FETCHPOINT } from "./MyPage.queries";
export default function MyPage() {
  const router = useRouter();
  const { data } = useQuery(FETCHPOINT);

  const charge = () => {
    router.push("/mypage/charge");
  };
  return <MyPageUI data={data} charge={charge} />;
}
