import RandomnumberPresenter from "./randomnumber.presenter";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
export default function RandomnumberContainer() {
  const [numbers, setNumbers] = useState([]);
  const { register, handleSubmit, setValue, formState, trigger} = useForm({
    mode: "onChange",
    // resolver : yupResolver(schema),
  })
  function Wave() {
    let a = 0;
    const arr = [];

    for (let i = 0; i < numbers.length; i++) {
      a = Math.floor(Math.random() * 45 + 1);

      arr.push(a);
    }
    setNumbers(arr);
  }

  return <RandomnumberPresenter register = {register} numbers={numbers} Wave={Wave} />;
}
