// @ts-nocheck
import styled from "@emotion/styled";
export const WrapperAll = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Wrapper = styled.div`
  width: 1560px;
  padding-top: 80px;
  padding-left: 360px;
  margin-right: 200px;
`;

export const WrapperRight = styled.div`
  margin-top: 700px;
  position: sticky;
  top: 64px;
`;
export const HeadWrapper = styled.div`
  width: 1300px;
  display: flex;
  justify-content: center;
`;
export const Head = styled.h1``;

export const BannerWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
`;

export const MenuWrapper = styled.div`
  width: 1200px;
  height: 160px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TradingItemWrapper = styled.div`
  height: 27px;
  display: flex;
  justify-content: space-between;
`;

export const TradingMenu = styled.div`
  margin-right: 10px;
  font-size: 18px;
`;
export const SearchWrapper = styled.div`
  height: 27px;
  display: flex;
  justify-content: space-between;
`;

export const ItemWrapper = styled.div`
  width: 1200px;
  height: 200px;
  border: 1px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemLeftWrapper = styled.div`
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Picture = styled.img`
  width: 160px;
  height: 160px;
  cursor: pointer;
  background-color: yellow;
`;

export const ItemInfoWrapper = styled.div`
  height: 160px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: pink;
`;
export const ItemRightWrapper = styled.div`
  height: 36px;
`;

export const Price = styled.div`
  font-size: 24px;
`;

export const Name = styled.div`
  height: 36px;
  font-size: 24px;
`;

export const Remarks = styled.div`
  height: 24px;
  font-size: 16px;
`;
export const Tag = styled.div`
  height: 24px;
  font-size: 16px;
`;
export const SellerHeartWrapper = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const SellerWrapper = styled.div`
  width: 90px;
  height: 30px;
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const Avatar = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("/boardpage/avatar.png");
  background-size: 100%;
`;
export const Seller = styled.div`
  width: 50px;
  height: 24px;
  font-size: 16px;
`;
export const HeartWrapper = styled.div`
  width: 90px;
  height: 30px;
  display: flex;
  flex-direction: row;

  align-items: center;
`;
export const Heart = styled.div`
  width: 20px;
  height: 18.35px;
  background-image: ${(props) =>
    props.istoggled
      ? "url(/marketpage/heart.png)"
      : "url(/marketpage/heartbroken.png)"};
  background-size: 100%;
`;
export const HeartNumber = styled.div`
  width: 24px;
  font-size: 16px;
`;
