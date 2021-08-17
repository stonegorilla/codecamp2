import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("이름은 필수 입력입니다.")
    .min(2, "2자이상입력해주세요"),
});
