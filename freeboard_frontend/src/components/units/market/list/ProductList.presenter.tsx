import BuildManifestPlugin from "next/dist/build/webpack/plugins/build-manifest-plugin";
import LayoutNavigation from "../../../commons/banner/LayoutBanner.container";
import InfiniteScroll from "react-infinite-scroller";
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
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={props.hasMore}
        >
          {props.item?.fetchUseditems.map((data) => (
            <ItemWrapper key={data._id}>
              <ItemLeftWrapper>
                {data.images[0] && (
                  <Picture
                    src={`https://storage.googleapis.com/${data.images[0]}`}
                    onClick={props.detail}
                    id={data._id}
                  />
                )}
                {!data.images[0] && (
                  <Picture
                    src={`/marketpage/noimage.png`}
                    onClick={props.detail}
                    id={data._id}
                  />
                )}

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
                      <Heart
                        istoggled={props.istoggled}
                        onClick={props.toggle}
                        id={data._id}
                      ></Heart>
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
        </InfiniteScroll>
      </Wrapper>
      <WrapperRight>
        <div>
          <b>오늘본 상품</b>
        </div>
        {props.baskets.map((data) => (
          <div key={data._id}>
            <div>{data.name}</div>
            <div>{data.remarks}</div>
            <Picture src={`https://storage.googleapis.com/${data.images[0]}`} />
          </div>
        ))}
      </WrapperRight>
    </WrapperAll>
  );
}
