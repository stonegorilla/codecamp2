import UserChangeUI from "./UserChange.presenter";
import { UPDATE_USER } from "./UserChange.queries";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./UserChange.validations";
export default function UserChange() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [changepassword] = useMutation(UPDATE_USER);

  async function onSubmit(data) {
    try {
      await changepassword({
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

  return (
    <UserChangeUI
      onSubmit={onSubmit}
      register={register}
      handleSubmit={handleSubmit}
      errors={formState.errors}
      isActive={formState.isValid}
    />
  );
}
