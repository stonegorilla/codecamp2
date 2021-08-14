import ProductDetail from "../../../../src/components/units/market/detail/ProductDetail.container";
import MarketCommentList from "../../../../src/components/units/marketComment/list/MarketCommentList.container";
import MarketCommentWrite from "../../../../src/components/units/marketComment/write/MarketCommentWrite.container";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ProductDetailPage() {
  return (
    <Wrapper>
      <ProductDetail />
      <MarketCommentWrite />
      <MarketCommentList />
    </Wrapper>
  );
}
