import { Wrapper, Title } from "./MyPageCharge.styles";
import Head from "next/head";

export default function ChargeUI(props) {
  return (
    <Wrapper>
      <Title>포인트를 충전하는 곳입니다. 마음껏 원하는 만큼 충전하세요</Title>
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
    </Wrapper>
  );
}
