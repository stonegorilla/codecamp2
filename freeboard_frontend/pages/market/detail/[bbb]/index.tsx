import ProductDetail from "../../../../src/components/units/market/detail/ProductDetail.container";
import MarketCommentList from "../../../../src/components/units/marketComment/list/MarketCommentList.container";
import MarketCommentWrite from "../../../../src/components/units/marketComment/write/MarketCommentWrite.container";

export default function ProductDetailPage() {
  return (
    <>
      <ProductDetail />
      <MarketCommentWrite />
      <MarketCommentList />
    </>
  );
}
