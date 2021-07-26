import { useQuery, useMutation } from "@apollo/client"
import BoardListUI from './BoardList.presenter'
import { useRouter } from 'next/router'
import { FETCH_BOARDS } from './BoardList.queries'
import { DELETE_BOARD } from "./BoardList.queries"
import { FETCH_BOARDS_COUNT} from "./BoardList.queries"
import { useState} from "react"

export default function BoardList(){
    const router = useRouter()
    const [startPage, setStartPage] = useState(1);
    const { data, refetch } = useQuery(FETCH_BOARDS, {
        variables: { page: startPage },
      });
      const { data: pageBoardCount } = useQuery(FETCH_BOARDS_COUNT);
      const lastPage = Math.ceil(Number(pageBoardCount?.fetchBoardsCount) / 10);
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

    function onClickPageNumber(event: MouseEvent<HTMLSpanElement>) {
        refetch({ page: Number(event.target.id) });
      }

    function onClickPrevPage() {
        if (startPage <= 1) return;
        setStartPage((prev) => prev - 10);
      }
      function onClickNextPage() {
        if (startPage + 10 > lastPage) return;
        setStartPage((prev) => prev + 10);
      }
    return (
        <BoardListUI
            Delete = {onClickDelete}
            qqq = {data}
            onClickPage = {onClickPage}
            onClickPageNumber = {onClickPageNumber}
            startPage = {startPage}
            lastPage = {lastPage}
            onClickPrevPage = {onClickPrevPage}
            onClickNextPage = {onClickNextPage}

        />
    )
}
