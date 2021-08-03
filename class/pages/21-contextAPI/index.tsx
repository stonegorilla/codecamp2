import ContextAPI from "../../src/components/units/21-contextAPI/ContextAPI.container";
// ContextAPI 라고 default 함수를 선언을 했다.
import { createContext } from "react";
// ContextAPI를 만드는 것을 react 에서 제공한다.

interface IContext {
  isEdit?: boolean;
}
// isEdit라는 것은 boolean 값으로 true나 false를 반환한다. typescript의 interface를 사용해
// isEdit의 타입을 고정한다.
export const AAAContext = createContext<IContext>({});
// AAAContext 는  이제 변수들의 state를 저장한다.?
export default function ContextAPIPage() {
  const value = {
    isEdit: true,
  };

  return (
    <AAAContext.Provider value={value}>
      {/* value 값을 넘겨준다. 왼쪽은 넘겨진 곳에서 쓸 변수(props 없이) 오른쪽변수는 지금 이 페이지에
        서 결정된 값이다.  */}
      <ContextAPI />
      {/* container 모양 */}
    </AAAContext.Provider>
  );
}
