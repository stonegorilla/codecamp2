import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useEffect, useState, useCallback } from "react";
import LoginPresenter from "./login.presenter";
import { LOGIN_USER } from "./login.queries";
import { GlobalContext } from "../../../../../pages/_app";

declare const window: typeof globalThis & {
  kakao: any;
};

const inputsInit = {
  email: "",
  password: "",
};

export default function LoginContainer() {
  const router = useRouter();
  const [inputs, setInputs] = useState(inputsInit);
  const [inputsErrors, setInputsErrors] = useState(inputsInit);
  const [loginuser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);
  // setAccessToken을 useContext라는 react-hook 함수를 이용해 가져온다.
  const KAKAO_SDK = "https://developers.kakao.com/sdk/js/kakao.js";
  const KAKAO_TOKEN = "75ce13618a2a3161330793fa9b482a47";
  const KAKAO_REDIRECT = "http://localhost:3000";

  function onChangeInputs(event) {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    setInputs(newInputs);
  }

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = KAKAO_SDK;
  //   script.onload = () => handleSuccess();
  //   document.body.appendChild(script);
  //   return () => script.remove();
  // }, []);

  // const handleSuccess = useCallback(() => {
  //   window.kakao.init(KAKAO_TOKEN);
  // }, []);
  async function onClickSubmit(event) {
    setInputsErrors({
      email: /\w+@\w+\./.test(inputs.email) ? "" : "제대로된 이메일 적으세요",
      password: /^[a-zA-Z0-9]{1,16}$/.test(inputs.password)
        ? ""
        : "1자리 이상 16자리 이하 써주세요",
    });
    // 정규식을 사용해 email과 password 조건을 생성
    if (
      /\w+@\w+\.com$/.test(inputs.email) &&
      /^[a-zA-Z0-9]{1,16}$/.test(inputs.password)
    ) {
      try {
        const result = await loginuser({
          variables: {
            password: inputs.password,
            email: inputs.email,
          },
        });

        setAccessToken(result.data?.loginUser.accessToken || "");
        // localStorage.setItem(
        //   "accessToken",
        //   result.data?.loginUser.accessToken || ""
        // );

        localStorage.setItem("refreshToken", "true");
        // localStorage에 refresh 토큰을 저장한다.
        alert("로그인성공");
        router.push("/market/list");
      } catch (error) {
        alert(error.message);
      }
    }
  }

  return (
    <LoginPresenter
      onClickSubmit={onClickSubmit}
      onChangeInputs={onChangeInputs}
      inputsErrors={inputsErrors}
    />
  );
}
