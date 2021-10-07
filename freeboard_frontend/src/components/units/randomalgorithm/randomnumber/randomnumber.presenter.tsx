import {
  Wrapper,
  NumberWrapper,
  NumberInput,
  OverlapWrapper,
  OverlapButton,
} from "./randomnumber.styles";

export default function RandomnumberPresenter() {
  return (
    <>
      <Wrapper>
        <NumberWrapper>
          <NumberInput />
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
