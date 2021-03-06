import styled from '@emotion/styled'

export const Wrapper = styled.div`
    width : 1200px;
    /* height : 1602px; */
    // margin은 나중에 설정할듯,
    margin-top : 100px;
    margin-left : 100px;
    padding-left:102px;
    padding-right: 102px;
    border : 1px solid;
    box-shadow : 2px 4px 13px rgba(0,0,0, 0.7);
`

export const Writer = styled.div`

    height: 36px;
    margin-top : 80px;
    font-weight: 500;
    font-size: 24px;
`
export const Date = styled.div`

    height: 24px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #828282;
`
export const Hr = styled.hr`

`

export const Title = styled.div`
    height: 54px;
    margin-top : 80px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 53px;
`

export const MainPicture = styled.div`
    width: 996px;
    height: 480px;
    background-size : 100%;
    background-image: url('/boardpage/mainpicture.png');
`

export const Contents = styled.div`
    width : 996px;
    margin-top : 40px;
    font-size : 16px;
    line-height : 23.68px;
`

export const VideoWrapper = styled.div`
    width : 100%;
    height  :240px;
    margin-top : 120px;
    display : flex;
    justify-content: center;
`

export const Video = styled.div`
    width: 486px;
    height: 240px;

    background-image: url('/boardpage/video.png');
    filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.2));
`

export const LikeDislikeCenterWrapper = styled.div`
    width : 100%;
    margin-bottom : 80px;
    display : flex;
    justify-content: center;


`
export const LikeDislikeWrapper = styled.div`
    width  :120px;
    height : 211px;
    display : flex;
    justify-content: space-between;
    align-items: flex-end;

`
export const LikeWrapper = styled.div`
    width : 40px;
    height: 51px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`
export const Like = styled.div`
    width : 20px;
    height : 18px;
    background-image: url('/boardpage/like.png');
`
export const LikeNumber = styled.div`
    font-size: 18px;
    color : #FFD600;
`

export const DisLikeWrapper = styled.div`
    width : 40px;
    height: 51px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const Dislike = styled.div`
    width : 22px;
    height  :20px;
    background-image: url('/boardpage/dislike.png');
`
export const DislikeNumber = styled.div`
    font-size : 18px;
`