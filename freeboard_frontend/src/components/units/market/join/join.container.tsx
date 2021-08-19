import { useState } from "react";
import JoinPresenter from "./join.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./join.queries";
import router, { useRouter } from "next/router";

const inputsInit = {
  email: "",
  name: "",
  password: "",
  repassword: "",
};

export default function JoinContainer() {
  const router = useRouter();
  const [inputs, setInputs] = useState(inputsInit);
  const [inputsErrors, setInputsErrors] = useState(inputsInit);
  const [createuser] = useMutation(CREATE_USER);

  function onChangeInputs(event) {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    setInputs(newInputs);
  }

  async function onClickSubmit(event) {
    console.log(inputs);

    setInputsErrors({
      email: /\w+@\w+\.com$/.test(inputs.email)
        ? ""
        : "제대로된 이메일 적으세요",
      name: inputs.name ? "" : "이름은 있어야지요",
      password: /^[a-zA-Z0-9]{1,16}$/.test(inputs.password)
        ? ""
        : "8자리 이상 16자리 이하를 써주세요",
      repassword:
        inputs.password === inputs.repassword
          ? ""
          : "비밀번호확인은 제대로 치세요",
    });
    if (
      /\w+@\w+\.com$/.test(inputs.email) &&
      inputs.name &&
      /^[a-zA-Z0-9]{1,16}$/.test(inputs.password) &&
      inputs.password === inputs.repassword
    ) {
      try {
        const result = await createuser({
          variables: {
            aaa: {
              email: inputs.email,
              name: inputs.name,
              password: inputs.password,
            },
          },
        });
        alert("회원가입 축하드립니다.");
        alert(result.data.createUser._id);
        router.push("/market/login");
      } catch (error) {
        alert(error.message);
      }
    } else {
      return;
    }
  }

  return (
    <JoinPresenter
      onClickSubmit={onClickSubmit}
      onChangeInputs={onChangeInputs}
      inputsErrors={inputsErrors}
    />
  );
}
