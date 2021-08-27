import { Wrapper, List } from "./lotto.styles.";

export default function LottoPresenter(props) {
  return (
    // Map 을 이용해 배열의 값들을 세로로 보여준다.
    <Wrapper>
      {props.numbers.map((data, index) => (
        <List key={index}>{data}</List>
      ))}

      <button onClick={props.Wave}>로또번호흔들기</button>
    </Wrapper>
  );
}
// 버튼 만드는 강좌
// https://www.youtube.com/watch?v=_nJl75kn3yY
