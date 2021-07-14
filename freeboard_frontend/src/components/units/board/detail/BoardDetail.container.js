import BoardDetailUI from './BoardDetail.presenter'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from "@apollo/client"
import { FETCH_BOARD } from "./BoardDetail.queries"
import { DELETE_BOARD} from "./BoardDetail.queries"





export default function BoardDetail(){
    const router = useRouter()

    const {data} = useQuery(
        FETCH_BOARD,
        {
            variables:{
                boardId : router.query.aaa
            }
        }
    )
    // console.log(router.query.aaa)
    const [deleteBoard] = useMutation(DELETE_BOARD)

    async function onClickDelete(event){
        alert("해당 글을 삭제합니다~")

        try {
            await deleteBoard({
                variables : {boardId : router.query.aaa},
                // refetchQueries: [{query : FETCH_BOARDS}]
            })
            alert("삭제가 완료되었습니다.")
            router.push('/boards')
        }catch(error){

        }

    }

    function gotoList(){
        router.push('/boards')
        console.log(router)
    }
    return (
        <BoardDetailUI
        onClickDelete = {onClickDelete}
        gotoList = {gotoList}
        qqq = {data}
        />
    )
}
