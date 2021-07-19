import { useQuery, useMutation } from "@apollo/client"
import BoardListUI from './BoardList.presenter'
import { useRouter } from 'next/router'
import { FETCH_BOARDS } from './BoardList.queries'
import { DELETE_BOARD } from "./BoardList.queries"

export default function BoardList(){
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARDS)
    const [deleteBoard] = useMutation(DELETE_BOARD)

    async function onClickDelete(event){
        alert("해당 글을 삭제합니다~")

        try {
            await deleteBoard({
                variables : {aaa : event.target.id},
                // refetchQueries: [{query : FETCH_BOARDS}]
            })
            alert("삭제가 완료되었습니다.")
        }catch(error){

        }

    }
    function onClickPage(event){
        console.log(event.target.id)
        router.push(`/boards/${event.target.id}`)
        // 동적 라우팅
    }
    return (
        <BoardListUI
            Delete = {onClickDelete}
            qqq = {data}
            aaa = {onClickPage}
        />
    )
}
