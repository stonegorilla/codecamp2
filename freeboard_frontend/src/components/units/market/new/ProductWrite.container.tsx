import {} from "./ProductWrite.queries";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react"; // useState 는 동적인 웹 만들때 많이 사용할 것 같으니 넣어주자. 그리고 이 페이지에선 쓰인다.
import BoardWriteUI from "./ProductWrite.presenter";
import { Modal } from "antd";
import { useRef } from "react";
import ProductWriteUI from "./ProductWrite.presenter";

export default function ProductWrite(props: IProps) {
  return <ProductWriteUI />;
}
