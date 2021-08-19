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
    for (var i = 0; i < 16384; i++) {
      try {
        const result1 = await createuser({
          variables: {
            aaa: {
              email: "hodujadu" + i,
              name: "호두자두" + i,
              password: "1234",
            },
          },
        });
        console.log(result1);
        const result2 = await loginuser({
          variables: {
            email: "hodujadu" + i,
            password: "1234",
          },
        });
        setAccessToken(result2.data?.loginUser.accessToken || "");
        localStorage.setItem(
          "accessToken",
          result2.data?.loginUser.accessToken || ""
        );
        console.log(result2);

        await toggleuseditempick({
          variables: { useditemId: "611c6aa022b2fb00290e3dee" },
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
