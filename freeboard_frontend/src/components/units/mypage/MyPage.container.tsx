import { useQuery } from "@apollo/client";


import MyPageUI from "./MyPage.presenter";
import {
  FETCH_USER_LOGGED_IN,
  
  
} from "./MyPage.queries";
export default function MyPage(props) {
  
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  
  
  
  return (
    <MyPageUI
      data={data}
      isActive01={props.isActive01}
      isActive02={props.isActive02}
      isActive03={props.isActive03}
      onClickMyItem={props.onClickMyItem}
      onClickMyPoint={props.onClickMyPoint}
      onClickMyProfile={props.onClickMyProfile}
    />
  );
}
