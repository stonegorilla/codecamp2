import RandomnumberPresenter from "./randomnumber.presenter";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./randomnumber.validations";
export default function RandomnumberContainer() {
  const [numbers, setNumbers] = useState([]);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    // resolver: yupResolver(schema),
  });
  function onSubmit(data) {
    console.log("들어가냐");
    let a = 0;
    const arr = [];

    for (let i = 0; i < data.numberofitem; i++) {
      a =
        Math.floor(
          Math.random() *
            (Number(data.lastnumber) - Number(data.firstnumber) + 1)
        ) + Number(data.firstnumber);

      arr.push(a);
    }
    setNumbers(arr);
    console.log(data);
  }

  return (
    <RandomnumberPresenter
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      numbers={numbers}
      errors={formState.errors}
    />
  );
}
