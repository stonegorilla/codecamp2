import { useMutation } from "@apollo/client";
import ProfileUI from "./Profile.presenter";
import { CHANGE_PASSWORD } from "./Profile.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPassword, schemaUser } from "./Profile.validations";
export default function Profile(){
    const { register, handleSubmit, formState } = useForm({
        mode: "onChange",
        resolver: yupResolver(schemaPassword),
      });
      const [changepassword] = useMutation(CHANGE_PASSWORD);
    
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
    return <ProfileUI 
    onSubmit={onSubmitPassword}
    register={register}
    handleSubmit={handleSubmit}
    errors={formState.errors}
    isActive={formState.isValid}
    />
}