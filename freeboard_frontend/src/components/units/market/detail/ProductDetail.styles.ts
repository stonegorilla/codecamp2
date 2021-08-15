import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1902px; */
  // margin은 나중에 설정할듯,
  margin-top: 100px;
  margin-left: 100px;
  padding-top: 82px;
  padding-left: 102px;
  padding-right: 102px;
  border: 1px solid;
  box-shadow: 2px 4px 13px rgba(0, 0, 0, 0.7);
`;
export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const NameRemarksWrapper = styled.div`
  height: 67px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NameRemarksPriceWrapper = styled.div`
  height: 128px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Date = styled.div`
  height: 24px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
`;

export const Hr = styled.hr``;
export const Remarks = styled.div`
  height: 27px;
  font-size: 16px;

  color: grey;
`;

export const Name = styled.div`
  height: 36px;
  font-size: 24px;

  color: blue;
`;

export const Price = styled.div`
  height: 53px;
  font-size: 36px;

  color: red;
`;

export const Contents = styled.div`
  width: 792px;
  margin-top: 80px;
`;
export const Seller = styled.div`
  height: 36px;
  //margin-top: 80px;
  font-weight: 500;
  font-size: 24px;
`;

export const MainPicture = styled.img`
  width: 384px;
  height: 384px;
  background-color: black;
`;
export const Picture = styled.img`
  width: 78px;
  height: 78px;
  margin-left: 12px;
  margin-right: 12px;
  background-color: green;
`;

export const PictureWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const PictureAllWrapper = styled.div`
  width: 100%;
  height: 482px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TagsWrapper = styled.div`
  height: 24px;
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const Tags = styled.div`
  font-size: 16px;
  color: grey;
`;
export const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Map = styled.div`
  width: 792px;
  height: 360px;
  margin-top: 80px;
  margin-bottom: 76px;
  background-color: yellow;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonRow = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;
