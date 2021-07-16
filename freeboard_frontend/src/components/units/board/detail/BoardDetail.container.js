import BoardDetailUI from './BoardDetail.presenter'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from "@apollo/client"
import { FETCH_BOARD } from "./BoardDetail.queries"
import { DELETE_BOARD} from "./BoardDetail.queries"
import { CREATE_BOARD_COMMENT } from "./BoardDetail.queries"
import { UPDATE_BOARD_COMMENT} from "./BoardDetail.queries"
import { DELETE_BOARD_COMMENT} from './BoardDetail.queries'
import { FETCH_BOARD_COMMENTS } from './BoardDetail.queries'


import { useState } from 'react'

const commentinputsInit = {
    writer : "",
    contents : ""
}





export default function BoardDetail(props){
    const router = useRouter()
    const [commentid , setCommentId] = useState('')
    const [commentinputs, setCommentInputs] = useState(commentinputsInit)

    const { data:aaaa } = useQuery(
        FETCH_BOARD_COMMENTS,
            {
                variables:{
                        boardId : router.query.aaa
                }

            }
        )

    const {data} = useQuery(
        FETCH_BOARD,
        {
            variables:{
                boardId : router.query.aaa
            }
        }
    )




    //console.log(commentdata)
    // console.log(router.query.aaa)
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
    const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT)
    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT)


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

    function gotoEdit(){
        router.push(`/boards/${router.query.aaa}/edit`)
    }

    function onChangeComments(event){

        if(event.target.name === "commentid") setCommentId(event.target.value)
        else{
            const newCommentInputs = {
                ...commentinputs,
                [event.target.name] : event.target.value
            }
            setCommentInputs(newCommentInputs)
        }
        console.log(event.target.name)
        console.log(event.target.value)


    }



    async function onCommentSubmit(){
        try{
            const result = await createBoardComment({
                variables : {
                    cBC: {
                        writer : commentinputs.writer,
                        password : "123",
                        contents : commentinputs.contents,
                        rating : 0
                    },
                    boardId : router.query.aaa
                }

            })
            alert("댓글등록되었습니다.")
            router.push(`/boards/${router.query.aaa}`)
        }catch(error){
            alert(error.message)

        }

    }

    async function onCommentEdit(){
        try{
            const result = await updateBoardComment({
                variables : {
                    uBC: {
                        contents : commentinputs.contents,
                        rating : 3
                    },
                    password : "123",
                    boardCommentId : commentid
                }
            })
            alert("수정되셨습니다. ")
            router.push(`/boards/${router.query.aaa}`)
        }catch(error){
            alert(error.message)
        }
    }

    async function onCommentDelete(event){
        try{
            const result = await deleteBoardComment({
                variables : {
                    password : "123",
                    boardCommentId : event.target.value
                }
            })
            alert("삭제되셨습니다.")
            router.push(`/boards/${router.query.aaa}`)
        }catch(error){
            alert(error.message)
        }
    }

    return (
        <BoardDetailUI
        onClickDelete = {onClickDelete}
        gotoList = {gotoList}
        gotoEdit = {gotoEdit}
        qqq = {data}
        commentdata = {aaaa}

        onChangeComments = {onChangeComments}
        onCommentSubmit = {onCommentSubmit}
        onCommentEdit = {onCommentEdit}
        onCommentDelete = {onCommentDelete}
        />
    )




}
