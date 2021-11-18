import styled from "@emotion/styled";
import { useQuery, gql } from "@apollo/client";
import { FaUserCircle, FaRegThumbsUp } from "react-icons/fa";
export const FETCH_BOARDS_OF_THE_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      likeCount
      images
      createdAt
    }
  }
`;

export const HeadWrapper = styled.div`
  padding-top: 80px;
  width: 1200px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;

export const BestBoardsWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const BestBoardWrapper = styled.div`
  width: 282px;
  height: 257px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  :hover {
    transition: 0.5s;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.4);
  }
`;

export const BestBoardImgWrapper = styled.div``;

export const BestBoardImg = styled.img`
  width: 100%;
  height: 128px;
  border-radius: 10px;
`;

export const BestBoardTitle = styled.div`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const BottomWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const WriterWrapper = styled.div``;

export const LikeBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Writer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const WriterName = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding-left: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const WriteDate = styled.div`
  padding-top: 8px;
  font-size: 12px;
  font-weight: 400;
  color: #828282;
`;

export const LikeBoardImg = styled.img`
  width: 22px;
  height: 22px;
`;

export const LikeBoardPoint = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding-top: 6px;
`;

export const ProfileIcon = styled(FaUserCircle)`
  font-size: 18px;
`;

export const LikeBoardIcon = styled(FaRegThumbsUp)`
  text-align: center;
  color: #1450f9;
`;

export default function () {
  const { data: bestData } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  return (
    <HeadWrapper>
      <Title>베스트 게시글</Title>
      <BestBoardsWrapper>
        {/* @ts-ignore */}
        {bestData?.fetchBoardsOfTheBest.map((data) => (
          <BestBoardWrapper
            onClick={() => onClickBestBoard(data._id)}
            key={data._id}
          >
            <BestBoardImgWrapper>
              <BestBoardImg
                src={
                  data.images[0]
                    ? `https://storage.googleapis.com/${data.images[0]}`
                    : "/images/mainIMG.jpg/"
                }
              />
            </BestBoardImgWrapper>

            <BestBoardTitle>{data.title}</BestBoardTitle>
            <BottomWrapper>
              <WriterWrapper>
                <Writer>
                  <ProfileIcon />
                  <WriterName>{data.writer}</WriterName>
                </Writer>
                <WriteDate>{getDate(data.createdAt)}</WriteDate>
              </WriterWrapper>
              <LikeBoardWrapper>
                <LikeBoardIcon />
                <LikeBoardPoint>{data.likeCount}</LikeBoardPoint>
              </LikeBoardWrapper>
            </BottomWrapper>
          </BestBoardWrapper>
        ))}
      </BestBoardsWrapper>
    </HeadWrapper>
  );
}
