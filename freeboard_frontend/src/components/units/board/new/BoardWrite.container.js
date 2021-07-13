import { CREATE_BOARD } from "./BoardWrite.queries"
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react' //useState 는 동적인 웹 만들때 많이 사용할 것 같으니 넣어주자. 그리고 이 페이지에선 쓰인다.
import BoardWriteUI from './BoardWrite.presenter'
export default function BoardWrite(){

    const router = useRouter()

    const [writer, setWriter] = useState('')
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')
    const [address, setAddress] = useState('')
    // 위 5개는 사용자가 input 안에 써넣은 결과값을 나타내는 것이다.
    // 실시간으로 값을 저장하기 위해
    const [writerError, setWriterError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [titleError, setTitleError] = useState('')
    const [contentsError, setContentsError] = useState('')
    const [addressError, setAddressError] = useState('')
    // 위 5개는 빨간색으로 표시되는 글을 나타내기 위해 쓴것이다.

    const [active, setActive] = useState(true)

    const [qqq] = useMutation(CREATE_BOARD)

    function aaa(event){
        if(event.target.value!=="" && password !== "" && title !== "" && contents !=="" ){
            setActive(false)
        }else{
            setActive(true)
        }
        setWriter(event.target.value)
    }
    // aaa 함수 내에서 event 변수를 이용해 이름 결과값을 실시간으로 저장한다.
    function bbb(event){
        if(writer!=="" && event.target.value !== "" && title !== "" && contents !=="" ){
            setActive(false)
        }else{
            setActive(true)
        }
        setPassword(event.target.value)
    }
    // bbb 함수 내에서 event 변수를 이용해 비밀번호 결과값을 실시간으로 저장한다.
    function ccc(event){
        if(writer!=="" && password !== "" && event.target.value !== "" && contents !==""){
            setActive(false)
        }else{
            setActive(true)
        }
        setTitle(event.target.value)
    }
    // ccc 함수 내에서 event 변수를 이용해 타이틀 결과값을 실시간으로 저장한다.
    function ddd(event){
        if(writer!=="" && password !== "" && title !== "" && event.target.value !==""){
            setActive(false)
        }else{
            setActive(true)
        }
        setContents(event.target.value)
    }
    // ddd 함수 내에서 event 변수를 이용해 내용 결과값을 실시간으로 저장한다.
    function eee(event){
        setAddress(event.target.value)
    }
    // eee 함수 내에서 event 변수를 이용해 주소 결과값을 실시간으로 저장한다.
    async function RedTrigger(event){
        if(writer === ""){
        setWriterError("작성자 이름을 입력해 주세요")
        }else if(password === ""){
        setNameError("")
        setPasswordError("비밀번호를 입력해 주세요")
        }else if(title === ""){
        setPasswordError("")
        setTitleError("제목을 입력해 주세요")
        }else if(contents === ""){
        setTitleError("")
        setContentsError("내용을 입력해 주세요")
        }else if(address===""){
        setContentsError("")
        setAddressError("주소를 입력해 주세요")
        }else{
        setWriterError("")
        setPasswordError("")
        setTitleError("")
        setContentsError("")
        setAddressError("")
        try{
            const result = await qqq({
                variables: {
                aaa: {
                    writer: writer,
                    password: password,
                    title: title,
                    contents: contents
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
    return (
        <BoardWriteUI
            aaa = {aaa}
            bbb = {bbb}
            ccc = {ccc}
            ddd = {ddd}
            eee = {eee}
            writerError = {writerError}
            passwordError = {passwordError}
            titleError = {titleError}
            contentsError = {contentsError}
            addressError = {addressError}
            RedTrigger = {RedTrigger}
            fff = {active}
            />
    )

}
