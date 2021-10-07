import { Wrapper, List } from "./calculator.styles";

export default function CalculatorPresenter(props) {
  return (
    <Wrapper>
      <List onClick={props.Lotto}>랜덤숫자뽑기</List>
      <List>과일썰기</List>
      <List>체스</List>
      <List>yacht</List>
      <List>계산기</List>
      <List onClick={props.Dices}>주사위 n 개 던지기</List>
    </Wrapper>
  );
}
