import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import LoginPresenter from "./login.presenter";
import { LOGIN_USER } from "./login.queries";
import { GlobalContext } from "../../../../../pages/_app";

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

  function onChangeInputs(event) {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    setInputs(newInputs);
  }

  async function onClickSubmit(event) {
    setInputsErrors({
      email: /\w+@\w+\./.test(inputs.email) ? "" : "제대로된 이메일 적으세요",
      password: /^[a-zA-Z0-9]{1,16}$/.test(inputs.password)
        ? ""
        : "1자리 이상 16자리 이하 써주세요",
    });

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
        localStorage.setItem(
          "accessToken",
          result.data?.loginUser.accessToken || ""
        );

        // console.log(result.data?.loginUser.accessToken);
        alert("로그인성공");
        router.push("/market/loginsuccess");
      } catch (error) {
        alert(error.message);
      }
    } else {
      return;
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
