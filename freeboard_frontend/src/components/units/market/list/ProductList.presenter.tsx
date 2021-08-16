import BuildManifestPlugin from "next/dist/build/webpack/plugins/build-manifest-plugin";
import LayoutNavigation from "../../../commons/banner/LayoutBanner.container";

import {
  WrapperAll,
  Wrapper,
  WrapperRight,
  HeadWrapper,
  Head,
  BannerWrapper,
  TradingItemWrapper,
  TradingMenu,
  SearchWrapper,
  MenuWrapper,
  ItemWrapper,
  ItemLeftWrapper,
  ItemRightWrapper,
  Price,
  Picture,
  ItemInfoWrapper,
  Name,
  Remarks,
  Tag,
  SellerHeartWrapper,
  SellerWrapper,
  Avatar,
  Seller,
  HeartWrapper,
  Heart,
  HeartNumber,
} from "./ProductList.styles";

export default function MarketListUI(props) {
  return (
    <WrapperAll>
      <Wrapper>
        <HeadWrapper>
          <Head>베스트 상품</Head>
        </HeadWrapper>
        <BannerWrapper>
          <LayoutNavigation best={props.best} />
        </BannerWrapper>
        <MenuWrapper>
          <TradingItemWrapper>
            <TradingMenu>판매중 상품</TradingMenu>
            <TradingMenu>판매된 상품</TradingMenu>
          </TradingItemWrapper>
          <SearchWrapper>도와주십시오</SearchWrapper>
        </MenuWrapper>
        {props.item?.fetchUseditems.map((data) => (
          <ItemWrapper key={data._id}>
            <ItemLeftWrapper>
              <Picture
                src={`https://storage.googleapis.com/${data.images[0]}`}
                onClick={props.detail}
                id={data._id}
              />
              <ItemInfoWrapper>
                <Name>{data.name}</Name>
                <Remarks>{data.remarks}</Remarks>
                <Tag>{data.tag}</Tag>

                <SellerHeartWrapper>
                  <SellerWrapper>
                    <Avatar></Avatar>
                    <Seller>{data.seller.name}</Seller>
                  </SellerWrapper>
                  <HeartWrapper>
                    <Heart onClick={props.toggle} id={data._id}></Heart>
                    <HeartNumber>{data.pickedCount}</HeartNumber>
                  </HeartWrapper>
                </SellerHeartWrapper>
              </ItemInfoWrapper>
            </ItemLeftWrapper>

            <ItemRightWrapper>
              <button onClick={props.onClickBasket(data)} id={data._id}>
                상품 상세보기
              </button>
              <Price>{data.price}원</Price>
              <Price>{data.buyer?.name}</Price>
            </ItemRightWrapper>
          </ItemWrapper>
        ))}
      </Wrapper>
      <WrapperRight>
        <div>오늘본 상품</div>
        {props.baskets.map((data) => (
          <div key={data._id}>
            <span>{data.name}</span>
            <span>{data.remarks}</span>
          </div>
        ))}
      </WrapperRight>
    </WrapperAll>
  );
}
