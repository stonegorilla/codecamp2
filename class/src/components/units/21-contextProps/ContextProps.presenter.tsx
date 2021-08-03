interface IProps {
  isEdit: boolean;
}

export default function ContextAPIUI(props: IProps) {
  return <div>{props.isEdit ? "수정하기" : "등록하기"}</div>;
  //   isEdit 이 참이면 수정하기 isEdit 가 거짓이면 isEdit 을 수정하기
}
