import { useMutation } from "@apollo/client";
import ChangePasswordUI from "./ChangePassword.presenter";
import { CHANGE_PASSWORD } from "./ChangePassword.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ChangePassword.validations";
export default function ChangePassword() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [changepassword] = useMutation(CHANGE_PASSWORD);

  async function onSubmit(data) {
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
  return (
    <ChangePasswordUI
      onSubmit={onSubmit}
      register={register}
      handleSubmit={handleSubmit}
      errors={formState.errors}
      isActive={formState.isValid}
    />
  );
}
