import { useState } from "react";
import withAuth from "../../src/components/commons/hocs/withAuth";
import MyPage from "../../src/components/units/mypage/MyPage.container";

function MyPagePage() {
  const [isActive01, setIsActive01] = useState(true);
  const [isActive02, setIsActive02] = useState(false);
  const [isActive03, setIsActive03] = useState(false);

  const onClickMyItem = () => {
    setIsActive01(true);
    setIsActive02(false);
    setIsActive03(false);
  };
  const onClickMyPoint = () => {
    setIsActive01(false);
    setIsActive02(true);
    setIsActive03(false);
  };
  const onClickMyProfile = () => {
    setIsActive01(false);
    setIsActive02(false);
    setIsActive03(true);
  };
  return <MyPage />;
}

export default withAuth(MyPagePage);
