import { useMutation } from "@apollo/client";
import ProfileUI from "./Profile.presenter";
import { CHANGE_PASSWORD, UPDATE_USER, UPLOAD_FILE } from "./Profile.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPassword, schemaUser } from "./Profile.validations";
import { useState } from "react";
export default function Profile() {
  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const {
    register: registerPwd,
    handleSubmit: handleSubmitPwd,
    formState: formStatePwd,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaPassword),
  });
  const {
    register: registerUser,
    handleSubmit: handleSubmitUser,
    formState: formStateUser,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaUser),
  });
  const [changepassword] = useMutation(CHANGE_PASSWORD);
  const [changeuser] = useMutation(UPDATE_USER);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  async function onSubmitPassword(data) {
    try {
      await changepassword({
        variables: {
          password: data.password,
        },
      });
      alert("비번변경성공");
    } catch (error) {
      alert(error.message);
    }
  }

  async function onSubmitUser(data) {
    try {
      await changeuser({
        variables: {
          updateUserInput: {
            name: data.name,
          },
        },
      });
      alert("회원정보변경성공");
    } catch (error) {
      alert(error.message);
    }
  }

  // @ts-ignore
  const onChangeFile = async (event) => {
    setFile(event.target.files[0]);
    const image = await uploadFile({
      variables: { file: event.target.files[0] },
    });
    setFile("https://storage.googleapis.com/" + image.data?.uploadFile?.url);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onload = (data) => {
      // console.log(data?.target?.result);
      setFileUrl(data.target?.result as string);
      // props.onChangeFiles(file, props.index);
    };
  };

  async function onSubmitPicture(data) {
    try {
      await changeuser({
        variables: {
          updateUserInput: {
            picture: file,
          },
        },
      });
      alert("회원정보변경성공");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <ProfileUI
      onSubmitPassword={onSubmitPassword}
      onSubmitUser={onSubmitUser}
      registerPwd={registerPwd}
      registerUser={registerUser}
      handleSubmitPwd={handleSubmitPwd}
      handleSubmitUser={handleSubmitUser}
      errorsPwd={formStatePwd.errors}
      errorsUser={formStateUser.errors}
      isActivePwd={formStatePwd.isValid}
      isActiveUser={formStateUser.isValid}
      onChangeFile={onChangeFile}
      onSubmitPicture={onSubmitPicture}
    />
  );
}
