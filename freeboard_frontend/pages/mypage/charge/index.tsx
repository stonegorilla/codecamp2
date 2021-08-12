import withAuth from "../../../src/components/commons/hocs/withAuth";
import Charge from "../../../src/components/units/mypage/charge/MyPageCharge.container";

function ChargePage() {
  return <Charge />;
}

export default withAuth(ChargePage);
