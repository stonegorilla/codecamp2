import LayoutNavigation from "../../../commons/banner/LayoutBanner.container";

import {
  Wrapper,
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

export default function MarketListUI() {
  return (
    <Wrapper>
      <HeadWrapper>
        <Head>베스트 상품</Head>
      </HeadWrapper>
      <BannerWrapper>
        <LayoutNavigation />
      </BannerWrapper>
      <MenuWrapper>
        <TradingItemWrapper>
          <TradingMenu>판매중 상품</TradingMenu>
          <TradingMenu>판매된 상품</TradingMenu>
        </TradingItemWrapper>
        <SearchWrapper>도와주십시오</SearchWrapper>
      </MenuWrapper>
      <ItemWrapper>
        <ItemLeftWrapper>
          <Picture></Picture>
          <ItemInfoWrapper>
            <Name>삼성전자 갤럭시탭A 10.1</Name>
            <Remarks>2019 LTE 32GB</Remarks>
            <Tag>#삼성전자 # 갤럭시탭</Tag>

            <SellerHeartWrapper>
              <SellerWrapper>
                <Avatar></Avatar>
                <Seller>판매자</Seller>
              </SellerWrapper>
              <HeartWrapper>
                <Heart></Heart>
                <HeartNumber>20000</HeartNumber>
              </HeartWrapper>
            </SellerHeartWrapper>
          </ItemInfoWrapper>
        </ItemLeftWrapper>

        <ItemRightWrapper>
          <Price>240120원</Price>
        </ItemRightWrapper>
      </ItemWrapper>
    </Wrapper>
  );
}
