import { Wrapper } from "./MyPageCharge.styles";
import Head from "next/head";

export default function ChargeUI(props) {
  return (
    <>
      <Wrapper>아놔 이런</Wrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
        ></script>
      </Head>
      결제금액 : <input type="text" onChange={props.onChangeAmount} />
      <button onClick={props.onClickPayment}>결제하기</button>
    </>
  );
}
