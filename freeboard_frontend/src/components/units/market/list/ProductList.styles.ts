// @ts-nocheck
import styled from "@emotion/styled";
export const WrapperAll = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Wrapper = styled.div`
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
  border-top: 1px solid;
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
`;

export const ItemInfoWrapper = styled.div`
  height: 160px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const BestItemWrapper = styled.div`
  width: 1200px;
  height: 450px;
  padding: 20px;
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BestItem = styled.div`
  margin: 10px;
  padding-top: 30px;
  width: 300px;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid; */
  border-radius: 20px;
  box-shadow: 2px 4px 13px rgba(0, 0, 0, 0.7);
`;

export const BestItemPicture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

export const BestItemTextWrapper = styled.div`
  width: 200px;
  padding-top: 15px;
`;
export const BestItemName = styled.div`
  line-height: 30px;
  font-size: 30px;
`;
export const BestItemPrice = styled.div`
  margin-top: 15px;
  line-height: 25px;
  font-size: 25px;
`;
export const BestItemToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  /* background-color: red; */
`;
export const BestItemPickedCount = styled.div`
  margin-left: 7px;
  line-height: 20px;
  font-size: 20px;
  /* background-color: yellow; */
`;
export const BestItemHeart = styled.img`
  width: 20px;
  height: 18.35px;
  /* background-color: yellow; */
`;
