// 액션 타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

// 액션 생성 함수
const increase = () => {
  return { type: INCREASE };
};
const decrease = () => ({ type: DECREASE });
const increaseAsync = () => ({ type: INCREASE_ASYNC });
const decreaseAsync = () => ({ type: DECREASE_ASYNC });

const All = (action) => {
  console.log(action);
};
All(increase());
