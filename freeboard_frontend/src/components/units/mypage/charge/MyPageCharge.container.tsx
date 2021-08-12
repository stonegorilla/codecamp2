import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./MyPageCharge.queries";
import ChargeUI from "./MyPageCharge.presenter";

export default function Charge() {
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  function onChangeAmount(event) {
    setAmount(event.target.value);
  }
  function onClickPayment() {
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "포인트",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사",
        buyer_postcode: "01181",
        m_redirect_url: "/mypage/charge",
      },
      async (rsp) => {
        console.log(rsp);
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          alert("결제에 성공하셨습니다.");
          //   router.push("/28-payment-success");
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패하셨습니다.");
        }
      }
    );
  }

  return (
    <ChargeUI onChangeAmount={onChangeAmount} onClickPayment={onClickPayment} />
  );
}
