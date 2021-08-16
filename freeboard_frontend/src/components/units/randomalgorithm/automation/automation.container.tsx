import { useMutation, useQuery } from "@apollo/client";
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
    for (var i = 0; i < 10789; i++) {
      try {
        const result1 = await createuser({
          variables: {
            aaa: {
              email: "tasdfeeedtrrrkfyrrs" + i,
              name: "나나나" + i,
              password: "12355",
            },
          },
        });
        console.log(result1);
        const result2 = await loginuser({
          variables: {
            email: "tasdfeeedtrrrkfyrrs" + i,
            password: "12355",
          },
        });
        setAccessToken(result2.data?.loginUser.accessToken || "");
        localStorage.setItem(
          "accessToken",
          result2.data?.loginUser.accessToken || ""
        );
        console.log(result2);

        await toggleuseditempick({
          variables: { useditemId: "6119123673b26e0029d9a3fe" },
        });
      } catch (error) {
        alert(error.message);
      }
    }
  }

  return (
    <>
      <button onClick={onClickSubmit}>알고리즘</button>
      <button>알고리즘2</button>
    </>
  );
}
