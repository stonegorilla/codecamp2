import LoginUI from "./Login.presenter";
import { ChangeEvent, useContext, useState } from "react";
import { ILoginProps } from "./Login.types";
import { CREATE_BOARD, LOGIN_USER, UPDATE_BOARD } from "./Login.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { GlobalContext } from "../../../../pages/_app";
import { useRouter } from "next/router";

export const INPUTS_INIT = {
  writer: "",
  password: "",
};

export default function Login(props: ILoginProps) {
  const router = useRouter();
  // const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAccessToken } = useContext(GlobalContext);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  // const [zipcode, setZipcode] = useState("");
  // const [address, setAddress] = useState("");
  // const [addressDetail, setAddressDetail] = useState("");
  // const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  // const [uploadFile] = useMutation(UPLOAD_FILE);

  //   // function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
  //   //   setAddressDetail(event.target.value);
  //   // }

  //   // function onChangeInputs(
  //   //   event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   // ) {
  //   //   const newInputs = { ...inputs, [event.target.name]: event.target.value };
  //   //   setInputs(newInputs);
  //   //   setActive(Object.values(newInputs).every((data) => data));
  //   //   setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
  //   // }

  //   // async function onClickSubmit() {
  //   //   setInputsErrors({
  //   //     writer: inputs.writer ? "" : "???????????? ??????????????????.",
  //   //     password: inputs.password ? "" : "??????????????? ??????????????????.",
  //   //   });

  //   return (
  //     <>
  //       <LoginUI
  //       // active={active}
  //       // onChangeInputs={onChangeInputs}
  //       // onChangeAddressDetail={onChangeAddressDetail}
  //       // inputsErrors={inputsErrors}
  //       // onClickSubmit={onClickSubmit}
  //       />
  //     </>
  //   );
  // }

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  function onChangeInputs(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
    setActive(Object.values(newInputs).every((data) => data));
    setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
  }

  async function onClickSubmit() {
    setInputsErrors({
      writer: inputs.writer ? "" : "???????????? ??????????????????.",
      password: inputs.password ? "" : "??????????????? ??????????????????.",
    });
    alert("????????? ??????");

    function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
      setEmail(event.target.value);
    }

    function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
      setPassword(event.target.value);
    }

    async function onClickLogin() {
      try {
        const result = await loginUser({
          variables: {
            email: email,
            password: password,
          },
        });
        setAccessToken(result.data?.loginUser.accessToken);
        router.push("/22-login-success");
      } catch (error) {
        alert(error.message);
      }
    }

    // const isEvery = Object.values(inputs)
    //   .filter((data) => data !== "yourubeUrl")
    //   .every((data) => data);
    // if (!isEvery) return;

    // try {
    // ????????? ?????????
    // const uploadFiles = files
    //   .filter((data) => data)
    //   .map((data) => uploadFile({ variables: { file: data } }));
    // const results = await Promise.all(uploadFiles);
    // const images = results.map((data) => data.data.uploadFile.url);

    // ????????? ?????????
    //     const result = await createBoard({
    //       variables: {
    //         createBoardInput: {
    //           ...inputs,
    //           boardAddress: {
    //             zipcode: zipcode,
    //             address: address,
    //             addressDetail: addressDetail,
    //           },
    //           images: images,
    //         },
    //       },
    //     });
    //     Modal.confirm({
    //       content: "???????????? ??????????????? ?????????????????????.",
    //       onOk: () => router.push(`/boards/${result.data.createBoard._id}`),
    //     });
    //   } catch (error) {
    //     alert(error.message);
    //   }
    // }

    // async function onClickUpdate() {
    //   setInputsErrors({
    //     writer: inputs.writer ? "" : "???????????? ??????????????????.",
    //     password: inputs.password ? "" : "??????????????? ??????????????????.",
    //   });
    //   if (Object.values(inputs).every((data) => data)) {
    //     try {
    //       const result = await updateBoard({
    //         variables: {
    //           boardId: router.query.boardId,
    //           password: inputs.password,
    //         },
    //       });
    //       Modal.confirm({
    //         content: "???????????? ??????????????? ?????????????????????.",
    //         onOk: () => router.push(`/boards/${result.data.updateBoard._id}`),
    //       });
    //     } catch (error) {
    //       alert(error.message);
    //     }
    //   }
    // }

    // function onClickAddressSearch() {
    //   setIsOpen(true);
    // }

    // function onCompleteAddressSearch(data: any) {
    //   setAddress(data.address);
    //   setZipcode(data.zonecode);
    //   setIsOpen(false);

    // function onChangeFiles(file: File, index: number) {
    //   const newFiles = [...files];
    //   newFiles[index] = file;
    //   setFiles(newFiles);
    // }

    return (
      <LoginUI
        // isOpen={isOpen}
        // isEdit={props.isEdit}
        active={active}
        // zipcode={zipcode}
        // address={address}
        inputsErrors={inputsErrors}
        onChangeInputs={onChangeInputs}
        onClickSubmit={onClickSubmit}
        // onClickUpdate={onClickUpdate}
        // onClickAddressSearch={onClickAddressSearch}
        // onCompleteAddressSearch={onCompleteAddressSearch}
        onChangeAddressDetail={onChangeAddressDetail}
        // onChangeFiles={onChangeFiles}
        onChange={onChangeEmail}
        onChange={onChangePassword}
        onClick={onClickLogin}
      />
    );
  }
}
