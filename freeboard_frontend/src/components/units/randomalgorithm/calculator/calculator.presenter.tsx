import {
  Wrapper,
  Calculator,
  Output,
  Clear,
  Operator,
  OperatorResult,
  Number,
  Dot,
  CalculatorForm,
} from "./calculator.styles";

export default function CalculatorPresenter(props) {
  return (
    <Wrapper>
      <Calculator>
        <CalculatorForm>
          <Output type="text" readOnly value={props.inputstate} />
          <Clear
            type="button"
            value="C"
            onClick={() => props.setInputState("")}
          />
          <Operator type="button" value="/" onClick={props.addToInput("/")} />
          <Number type="button" value="1" onClick={props.addToInput("1")} />
          <Number type="button" value="2" onClick={props.addToInput("2")} />
          <Number type="button" value="3" onClick={props.addToInput("3")} />
          <Operator type="button" value="+" onClick={props.addToInput("+")} />
          <Number type="button" value="4" onClick={props.addToInput("4")} />
          <Number type="button" value="5" onClick={props.addToInput("5")} />
          <Number type="button" value="6" onClick={props.addToInput("6")} />
          <Operator type="button" value="*" onClick={props.addToInput("*")} />
          <Number type="button" value="7" onClick={props.addToInput("7")} />
          <Number type="button" value="8" onClick={props.addToInput("8")} />
          <Number type="button" value="9" onClick={props.addToInput("9")} />
          <Operator type="button" value="-" onClick={props.addToInput("-")} />
          <Dot type="button" value="." onClick={props.addToInput(".")} />
          <Number type="button" value="0" onClick={props.addToInput("0")} />
          <OperatorResult
            type="button"
            value="="
            onClick={props.calculateResult}
          />
        </CalculatorForm>
      </Calculator>
    </Wrapper>
  );
}
