import { useState } from "react";
import styled from '@emotion/styled'
import withAuth from "../../src/components/commons/hocs/withAuth";
import MyPage from "../../src/components/units/mypage/MyPage.container";
import SellingItem from "../../src/components/units/mypage/SellingItem/SellingItem.container";
import Profile from "../../src/components/units/mypage/Profile/Profile.container";
import MyPoint from "../../src/components/units/mypage/MyPoint/MyPoint.container";

const Wrapper = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

`
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
  return (
    <Wrapper>
    <MyPage 
      isActive01={isActive01}
      isActive02={isActive02}
      isActive03={isActive03}
      onClickMyItem={onClickMyItem}
      onClickMyPoint={onClickMyPoint}
      onClickMyProfile={onClickMyProfile}
    />
    {isActive01 && <SellingItem/> }
    {isActive02 && <MyPoint />}
    {isActive03 && <Profile />}
    </Wrapper>
    
  );
}

export default withAuth(MyPagePage);
