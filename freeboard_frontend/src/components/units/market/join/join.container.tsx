import { useState } from "react";
import JoinPresenter from "./join.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./join.queries";

const inputsInit = {
  email: "",
  name: "",
  password: "",
  repassword: "",
};

const inputsErrorInit = {
  email: "",
  name: "",
  password: "",
  repassword: "",
};
export default function JoinContainer() {
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
    const a = /\w+@\w+\.\w+/.test(inputs.email);
    console.log(a);
    setInputsErrors({
      email: a ? "" : "제대로된 이메일 적으세요",
      name: inputs.name ? "" : "이름은 있어야지요",
      password: /^[a-zA-Z0-9]{8,16}$/.test(inputs.password)
        ? ""
        : "비밀번호는 8자리 이상 16자리 이하를 써주세요",
      repassword:
        inputs.password !== inputs.repassword
          ? ""
          : "비밀번호확인은 제대로 치세요",
    });

    if (inputsErrors !== { email: "", name: "", password: "", repassword: "" })
      return;

    // if (!/\w+@\w+\.\w+/.test(inputs.email)) {
    //   alert("제대로된 이메일 적으세요");
    // } else if (inputs.name === "") {
    //   alert("이름은 있어야지요~");
    // } else if (!/^[a-zA-Z0-9]{8,16}$/.test(inputs.password)) {
    //   alert("비밀번호는 8자리 이상 16자리 이하를 써주세요");
    // } else if (inputs.password !== inputs.repassword) {
    //   alert("비밀번호확인은 제대로 치세요");
    // } else {
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
    } catch (error) {
      alert(error.message);
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
