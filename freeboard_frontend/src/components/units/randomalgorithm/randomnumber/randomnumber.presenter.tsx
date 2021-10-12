import {
  Wrapper,
  NumberWrapper,
  NumberInput,
  OverlapWrapper,
  OverlapButton,
  ListWrapper,
  List,
} from "./randomnumber.styles";

export default function RandomnumberPresenter(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Wrapper>
          <NumberWrapper>
            숫자적기
            <NumberInput type="text" {...props.register("firstnumber")} />
            {/* {props.errors.firstnumber?.message} */}
            ~
            <NumberInput type="text" {...props.register("lastnumber")} />
            {/* {props.errors.lastnumber?.message} */}
            몇개? :
            <NumberInput type="text" {...props.register("numberofitem")} />
          </NumberWrapper>
          <OverlapWrapper>
            <OverlapButton>중복허용</OverlapButton>
            <OverlapButton>중복불가</OverlapButton>
            <OverlapButton type="submit"  > 고고</OverlapButton>
          </OverlapWrapper>
        </Wrapper>
      </form>
      <ListWrapper>
        {props.numbers.map((data, index) => (
          <List key={index}>{data}</List>
        ))}
      </ListWrapper>
    </>
  );
}
