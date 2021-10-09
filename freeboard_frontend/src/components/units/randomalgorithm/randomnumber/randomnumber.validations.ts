import * as yup from "yup";

export const schema = yup.object().shape({
  firstnumber: yup.number().required("첫번째숫자 입력해 주세요"),
  lastnumber: yup.number().required("마지막숫자 입력해 주세요"),
  numberofitems: yup.number().required("몇개 뽑을 거에요"),
});
