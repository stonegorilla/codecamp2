import {
  Wrapper,
  NumberWrapper,
  NumberInput,
  OverlapWrapper,
  OverlapButton,
} from "./randomnumber.styles";

export default function RandomnumberPresenter(props) {
  return (
    <>
      <Wrapper>
        <NumberWrapper>
          숫자적기
          <NumberInput type= {{...props.register("firstnumber")}}/>
          ~
          <NumberInput type= {{...props.register("lastnumber")}}/>
          몇개? :
          <NumberInput />
        </NumberWrapper>
        <OverlapWrapper>
          <OverlapButton>중복허용</OverlapButton>
          <OverlapButton>중복불가</OverlapButton>
        </OverlapWrapper>
      </Wrapper>
    </>
  );
}
