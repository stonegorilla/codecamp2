import {
  Wrapper,
  TitleWrapper,
  Title,
  Image,
  ListWrapper,
  List,
} from "./mainpage.styles";

export default function RandomAlgorithmPresenter(props) {
  return (
    <Wrapper>
      <TitleWrapper>
        <Image src="/randomalgorithm/stonemonkey.jpg" />
        <Title style={{ color: "red" }}>돌원슝</Title>
        <Title>의 실험실</Title>
      </TitleWrapper>
      <ListWrapper>
        <List onClick={props.Randomnumber}>랜덤숫자흔들기</List>
        <List>과일썰기</List>
        <List onClick={props.BeforeChess}>체스</List>
        <List>yacht</List>
        <List onClick={props.Calculator}>계산기</List>
        <List onClick={props.Dices}>주사위 n 개 던지기</List>
        <List onClick={props.Automation}>중고마켓매크로</List>
      </ListWrapper>
    </Wrapper>
  );
}
