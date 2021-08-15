import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("이름은 필수 입력입니다."),
  remarks: yup.string().required("한줄요약은 필수 입력입니다."),
  contents: yup
    .string()
    .required("내용은 필수 입력입니다.")
    .min(10, "10자 이상 입력해주세요"),
  price: yup.number().required("가격은 필수 입력입니다."),
  address: yup.string().required("주소는 필수 입력입니다."),
  addressdetail: yup.string().required("상세주소는 필수 입력입니다."),
});
