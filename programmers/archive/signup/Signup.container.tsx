import SignupUI from "./Signup.presenter";
// import { ChangeEvent, useState } from "react";
// import { ILoginProps } from "./Signup.types";
// import { CREATE_BOARD, UPDATE_BOARD } from "./Signup.queries";
// import { useMutation } from "@apollo/client";
// import { useRouter } from "next/router";

export default function Signup() {
  return <SignupUI />;
}

// export const INPUTS_INIT = {
//   writer: "",
//   password: "",
// };

// export default function Login(props: ILoginProps) {
//   const router = useRouter();
//   // const [isOpen, setIsOpen] = useState(false);
//   const [active, setActive] = useState(false);
//   const [inputs, setInputs] = useState(INPUTS_INIT);
//   const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);
//   // const [zipcode, setZipcode] = useState("");
//   // const [address, setAddress] = useState("");
//   // const [addressDetail, setAddressDetail] = useState("");
//   // const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
//   const [createBoard] = useMutation(CREATE_BOARD);
//   const [updateBoard] = useMutation(UPDATE_BOARD);
//   // const [uploadFile] = useMutation(UPLOAD_FILE);

//   //   // function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
//   //   //   setAddressDetail(event.target.value);
//   //   // }

//   //   // function onChangeInputs(
//   //   //   event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   //   // ) {
//   //   //   const newInputs = { ...inputs, [event.target.name]: event.target.value };
//   //   //   setInputs(newInputs);
//   //   //   setActive(Object.values(newInputs).every((data) => data));
//   //   //   setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
//   //   // }

//   //   // async function onClickSubmit() {
//   //   //   setInputsErrors({
//   //   //     writer: inputs.writer ? "" : "이메일을 입력해주세요.",
//   //   //     password: inputs.password ? "" : "비밀번호를 입력해주세요.",
//   //   //   });

//   //   return (
//   //     <>
//   //       <LoginUI
//   //       // active={active}
//   //       // onChangeInputs={onChangeInputs}
//   //       // onChangeAddressDetail={onChangeAddressDetail}
//   //       // inputsErrors={inputsErrors}
//   //       // onClickSubmit={onClickSubmit}
//   //       />
//   //     </>
//   //   );
//   // }

//   function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
//     setAddressDetail(event.target.value);
//   }

//   function onChangeInputs(
//     event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) {
//     const newInputs = { ...inputs, [event.target.name]: event.target.value };
//     setInputs(newInputs);
//     setActive(Object.values(newInputs).every((data) => data));
//     setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
//   }

//   async function onClickSubmit() {
//     setInputsErrors({
//       writer: inputs.writer ? "" : "작성자를 입력해주세요.",
//       password: inputs.password ? "" : "비밀번호를 입력해주세요.",
//     });

//     // const isEvery = Object.values(inputs)
//     //   .filter((data) => data !== "yourubeUrl")
//     //   .every((data) => data);
//     // if (!isEvery) return;

//     // try {
//     // 이미지 업로드
//     // const uploadFiles = files
//     //   .filter((data) => data)
//     //   .map((data) => uploadFile({ variables: { file: data } }));
//     // const results = await Promise.all(uploadFiles);
//     // const images = results.map((data) => data.data.uploadFile.url);

//     // 게시물 업로드
//     //     const result = await createBoard({
//     //       variables: {
//     //         createBoardInput: {
//     //           ...inputs,
//     //           boardAddress: {
//     //             zipcode: zipcode,
//     //             address: address,
//     //             addressDetail: addressDetail,
//     //           },
//     //           images: images,
//     //         },
//     //       },
//     //     });
//     //     Modal.confirm({
//     //       content: "게시물이 성공적으로 등록되었습니다.",
//     //       onOk: () => router.push(`/boards/${result.data.createBoard._id}`),
//     //     });
//     //   } catch (error) {
//     //     alert(error.message);
//     //   }
//     // }

//     // async function onClickUpdate() {
//     //   setInputsErrors({
//     //     writer: inputs.writer ? "" : "작성자를 입력해주세요.",
//     //     password: inputs.password ? "" : "비밀번호를 입력해주세요.",
//     //   });
//     //   if (Object.values(inputs).every((data) => data)) {
//     //     try {
//     //       const result = await updateBoard({
//     //         variables: {
//     //           boardId: router.query.boardId,
//     //           password: inputs.password,
//     //         },
//     //       });
//     //       Modal.confirm({
//     //         content: "게시물이 성공적으로 수정되었습니다.",
//     //         onOk: () => router.push(`/boards/${result.data.updateBoard._id}`),
//     //       });
//     //     } catch (error) {
//     //       alert(error.message);
//     //     }
//     //   }
//     // }

//     // function onClickAddressSearch() {
//     //   setIsOpen(true);
//     // }

//     // function onCompleteAddressSearch(data: any) {
//     //   setAddress(data.address);
//     //   setZipcode(data.zonecode);
//     //   setIsOpen(false);
//   }

//   // function onChangeFiles(file: File, index: number) {
//   //   const newFiles = [...files];
//   //   newFiles[index] = file;
//   //   setFiles(newFiles);
//   // }

//   return (
//     <LoginUI
//       // isOpen={isOpen}
//       // isEdit={props.isEdit}
//       active={active}
//       // zipcode={zipcode}
//       // address={address}
//       inputsErrors={inputsErrors}
//       onChangeInputs={onChangeInputs}
//       onClickSubmit={onClickSubmit}
//       // onClickUpdate={onClickUpdate}
//       // onClickAddressSearch={onClickAddressSearch}
//       // onCompleteAddressSearch={onCompleteAddressSearch}
//       onChangeAddressDetail={onChangeAddressDetail}
//       // onChangeFiles={onChangeFiles}
//     />
//   );
// }
