import {
  Wrapper,
  ListWrapper,
  List,
  Button,
  ButtonWrapper,
} from "./result.styles.";

export default function ResultPresenter(props) {
  return (
    // Map 을 이용해 배열의 값들을 세로로 보여준다.
    <Wrapper>
      <ListWrapper>
        {props.numbers.map((data, index) => (
          <List key={index}>{data}</List>
        ))}
      </ListWrapper>
      <ButtonWrapper>
        <Button onClick={props.Wave}>로또번호흔들기</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
// 버튼 만드는 강좌
// https://www.youtube.com/watch?v=_nJl75kn3yY
