import { CREATE_BOARD } from "./BoardWrite.queries"
import { UPDATE_BOARD } from "./BoardWrite.queries"
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react' //useState 는 동적인 웹 만들때 많이 사용할 것 같으니 넣어주자. 그리고 이 페이지에선 쓰인다.
import BoardWriteUI from './BoardWrite.presenter'

const inputsInit = {
    writer: "",
    password: "",
    title: "",
    contents: ""
}

export default function BoardWrite(props){

    const router = useRouter()


    const [inputs, setInputs] = useState(inputsInit)

    // const [writer, setWriter] = useState('')
    // const [password, setPassword] = useState('')
    // const [title, setTitle] = useState('')
    // const [contents, setContents] = useState('')


    const [writerError, setWriterError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [contentsError, setContentsError] = useState("")


    const [active, setActive] = useState(true)

    const [qqq] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    function onChangeInputs(event){
        const newInputs = {
            ...inputs,
            [event.target.name] : event.target.value
        }
        setInputs(newInputs)
        if(Object.values(newInputs).every(data => data)) setActive(false)

    }


    async function RedTrigger(event){
        if(inputs.writer === ""){
        setWriterError("작성자 이름을 입력해 주세요")
        }else{
            setWriterError("")
        }
        if(inputs.password === ""){
        setPasswordError("비밀번호를 입력해 주세요")
        }else{
            setPasswordError("")
        }
        if(inputs.title === ""){
        setTitleError("제목을 입력해 주세요")
        }else{
            setTitleError("")
        }
        if(inputs.contents === ""){
        setContentsError("내용을 입력해 주세요")
        }else{
            setContentsError("")
        }

        if(inputs.writer!=="" && inputs.password!=="" && inputs.title!=="" &&  inputs.contents!==""){

        try{
            const result = await qqq({
                variables: {
                aaa: {
                    writer: inputs.writer,
                    password: inputs.password,
                    title: inputs.title,
                    contents: inputs.contents
                }
                }
            })
            alert("글이 등록 되었습니다. ")
            router.push(`/boards/${result.data.createBoard._id}`)
        }catch(error){
            alert(error.message)
        }

        // 이름, 비밀번호, 제목, 내용, 주소 결과값을 이용해 비어있는 값이 있으면 빨간 경고 글씨를 내보낸다.
        }
    }

    async function onClickEdit(){
        const newInputs = {}
        if(inputs.title) newInputs.title = inputs.title
        if(inputs.contents) newInputs.contents = inputs.contents

        try{
            const result = await updateBoard({
                variables: {
                    boardId : router.query.aaa,
                    password : inputs.password,
                    updateBoardInput : {...newInputs}
                }
            })
            alert(result.data.updateBoard._id)
            router.push(`/boards/${result.data.updateBoard._id}`)
        }catch(error){
            alert(error.message)
        }
    }
    return (
        <BoardWriteUI
            onChangeInputs = {onChangeInputs}
            writerError = {writerError}
            passwordError = {passwordError}
            titleError = {titleError}
            contentsError = {contentsError}
            RedTrigger = {RedTrigger}
            onClickEdit = {onClickEdit}
            fff = {active}
            isEdit = {props.isEdit}
            data = {props.data}
            />
    )

}
