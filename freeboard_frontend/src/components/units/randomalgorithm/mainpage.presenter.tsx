import { Wrapper, List } from "./mainpage.styles";

export default function RandomAlgorithmPresenter(props) {
  return (
    <Wrapper>
      <List onClick={props.Lotto}>로또번호</List>
      <List>과일썰기</List>
      <List>체스</List>
      <List>yacht</List>
      <List>계산기</List>
      <List onClick={props.Dices}>주사위 n 개 던지기</List>
    </Wrapper>
  );
}
