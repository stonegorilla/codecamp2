import { useContext } from "react";
// 여기에는 index.tsx 의 createContext하고 완전히 반대되는 useContext를 쓴다.
// 그리고 여기에 AAAContext라는 것도 import 해준다.
import { AAAContext } from "../../../../pages/21-contextAPI";

export default function ContextAPIUI() {
  const { isEdit } = useContext(AAAContext);
  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
  //   isEdnt 이 참이면 수정하기 isEdit 가 거짓이면 isEdit 을 수정하기
}
