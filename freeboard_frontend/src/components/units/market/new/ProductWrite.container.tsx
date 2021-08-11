import {} from "./ProductWrite.queries";

import { useMutation } from "@apollo/client";
import router, { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react"; // useState 는 동적인 웹 만들때 많이 사용할 것 같으니 넣어주자. 그리고 이 페이지에선 쓰인다.

import { Modal } from "antd";
import { useRef } from "react";

import withAuth from "../../../commons/hocs/withAuth";
import { GlobalContext } from "../../../../../pages/_app";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ProductWrite.validations";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_USED_ITEM } from "./ProductWrite.queries";

export default function ProductWrite(props: IProps) {
  const { register, handleSubmit, setValue, formState, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createUsedItem] = useMutation(CREATE_USED_ITEM);

  async function onSubmit(data) {
    try {
      console.log(data.name);
      console.log(data.remarks);
      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
          },
        },
      });
      alert("등록성공");
      console.log(result.data);
      router.push(`/market/detail/${result.data.createUseditem._id}`);
    } catch (error) {
      alert(error.message);
    }
  }

  const onChangeContents = (value) => {
    const isBlank = "<p><br></p>";
    setValue("contents", value === isBlank ? "" : value);
    trigger("contents");
    console.log(formState.errors.remarks);
  };
  return (
    <ProductWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      onChangeContents={onChangeContents}
      isActive={formState.isValid}
      errors={formState.errors}
    />
  );
}

// withAuth(ProductWrite);
