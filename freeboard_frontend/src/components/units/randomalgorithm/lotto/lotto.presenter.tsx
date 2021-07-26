import { Wrapper, List } from "./lotto.styles.";

export default function LottoPresenter(props) {
  return (
    <Wrapper>
      <List>{props.numbers[0]}</List>
      <List>{props.numbers[1]}</List>
      <List>{props.numbers[2]}</List>
      <List>{props.numbers[3]}</List>
      <List>{props.numbers[4]}</List>
      <List>{props.numbers[5]}</List>
      <button onClick={props.Wave}>로또번호흔들기</button>
    </Wrapper>
  );
}
// https://www.youtube.com/watch?v=_nJl75kn3yY
