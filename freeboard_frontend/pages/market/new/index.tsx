import withAuth from "../../../src/components/commons/hocs/withAuth";
import ProductWrite from "../../../src/components/units/market/new/ProductWrite.container";

function ProductNewPage() {
  return <ProductWrite />;
}

export default withAuth(ProductNewPage);
