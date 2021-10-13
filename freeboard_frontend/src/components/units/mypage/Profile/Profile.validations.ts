import * as yup from "yup";


export const schemaPassword = yup.object().shape({
    password: yup
      .string()
      .required("비밀번호는 필수 입력입니다.")
      .min(2, "2자이상입력해주세요"),
  }); 

export const schemaUser = yup.object().shape({
  name: yup
    .string()
    .required("이름은 필수 입력입니다.")
    .min(2, "2자이상입력해주세요"),
});