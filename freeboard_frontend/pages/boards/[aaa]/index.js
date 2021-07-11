import {gql, useQuery} from '@apollo/client'
import {useRouter} from 'next/router'
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

    } from '../../../styles/boards/id/id.styles'

const FETCH_BOARD = gql`
query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      writer
      title
      contents
    }
  }
`

export default function DetailPage(){
    const router = useRouter()

    const {data} = useQuery(
        FETCH_BOARD,
        {
            variables:{
                boardId : router.query.aaa
            }
        }
    )
    console.log(router.query.aaa)

    return (
        <Wrapper>
            <Writer>{data ? data.fetchBoard.writer : '111' }</Writer>
            <Date>12121</Date>
            <Hr></Hr>
            <Title>{data ? data.fetchBoard.title : '222'}</Title>
            <MainPicture></MainPicture>
            <Contents>{data  ? data.fetchBoard.contents : '333'}</Contents>
            <VideoWrapper>
                <Video></Video>
            </VideoWrapper>

            <LikeDislikeCenterWrapper>
                <LikeDislikeWrapper>
                    <LikeWrapper>
                        <Like></Like>
                        <LikeNumber>1920</LikeNumber>
                    </LikeWrapper>
                    <DisLikeWrapper>
                        <Dislike></Dislike>
                        <DislikeNumber>1920</DislikeNumber>
                    </DisLikeWrapper>
                </LikeDislikeWrapper>
            </LikeDislikeCenterWrapper>


        </Wrapper>
    )
}