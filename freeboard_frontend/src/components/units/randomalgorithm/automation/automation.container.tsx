import { useMutation } from "@apollo/client";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";

import {
  CREATE_USER,
  LOGIN_USER,
  TOGGLE_USED_ITEM_PICK,
} from "./automation.queries";

export default function Automation() {
  const [createuser] = useMutation(CREATE_USER);
  const [loginuser] = useMutation(LOGIN_USER);
  const [toggleuseditempick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const { setAccessToken } = useContext(GlobalContext);
  async function onClickSubmit() {
    // 버튼을 누르면 회원가입해서 아이디를 만들고, 그걸로 로그인을 해서 한 상품을 찜을 눌러준다.
    // 이를 16384번 반복한다.
    for (let i = 0; i < 300; i++) {
      // 먼저 아이디를 만든다. 중복되지 않게 +i를 붙여준다.
      try {
        const result1 = await createuser({
          variables: {
            aaa: {
              email: "sdlkafjsdf" + i,
              name: "dsofsdfsdf" + i,
              password: "1234",
            },
          },
        });
        console.log(result1);
        // 그 아이디로 로그인을 한다.
        const result2 = await loginuser({
          variables: {
            email: "sdlkafjsdf" + i,
            password: "1234",
          },
        });
        setAccessToken(result2.data?.loginUser.accessToken || "");
        localStorage.setItem(
          "accessToken",
          result2.data?.loginUser.accessToken || ""
        );
        console.log(result2);
        // 로그인한 아이디로 useditemId에 해당하는 상품을 찜을 해준다.
        await toggleuseditempick({
          variables: { useditemId: "6152935af58545002b8fdb2e" },
        });
      } catch (error) {
        alert(error.message);
      }
    }
  }

  return (
    // 버튼들
    <>
      <button onClick={onClickSubmit}>알고리즘</button>
      <button>알고리즘2</button>
    </>
  );
}
