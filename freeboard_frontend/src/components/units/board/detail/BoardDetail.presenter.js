import {
    Wrapper,
        Writer,
        Date,
        Hr,
        Title,
        MainPicture,
        Contents,
        VideoWrapper,
        Video,
        LikeDislikeCenterWrapper,
        LikeDislikeWrapper,
        LikeWrapper,
        Like,
        LikeNumber,
        DisLikeWrapper,
        Dislike,
        DislikeNumber,
} from './BoardDetail.styles'

    export default function BoardDetailUI(props){
        return(
            <Wrapper>
            <Writer>{props.qqq ? props.qqq.fetchBoard.writer : '111' }</Writer>
            <Date>12121</Date>
            <Hr></Hr>
            <Title>{props.qqq ? props.qqq.fetchBoard.title : '222'}</Title>
            <MainPicture></MainPicture>
            <Contents>{props.qqq  ? props.qqq.fetchBoard.contents : '333'}</Contents>
            <VideoWrapper>
                <Video></Video>
            </VideoWrapper>

            <LikeDislikeCenterWrapper>
                <LikeDislikeWrapper>
                    <LikeWrapper>
                        <Like></Like>
                        <LikeNumber>1913</LikeNumber>
                    </LikeWrapper>
                    <DisLikeWrapper>
                        <Dislike></Dislike>
                        <DislikeNumber>1913</DislikeNumber>
                    </DisLikeWrapper>
                </LikeDislikeWrapper>
            </LikeDislikeCenterWrapper>


        </Wrapper>
        )
    }
