import {useState} from 'react'


import {
    Wrapper,
    Bar,
    Logo,
    ItsRoad,
    Label,
    RedError,
    Rectangle,
    MenuWrapper,
    Mask,
    Rectangle2

} from '../../styles/itsroad/itsroad.styles'
// import 할것은 이렇게 세로로 쓰는 것이 좋다.
export default function ItsRoadRoad(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    function aaa(event){
        setEmail(event.target.value)
    }
    function bbb(event){
        setPassword(event.target.value)
    }
    function ccc(event){
        if(email ===""){
            setEmailError("이메일을 입력해주세요")
            setPasswordError("")
        } else if(password===""){
            setEmailError("")
            setPasswordError("비밀번호를 입력해 주세요")
        }else{

            alert("들어가볼까유?")

        }
    }
    return (
        <Wrapper>
            <Bar></Bar>
            <Logo></Logo>
            <ItsRoad>잇츠로드</ItsRoad>
            <Label type="text" onChange={aaa}></Label>
            <RedError>{emailError}</RedError>
            <Label type="password" onChange={bbb}></Label>
            <RedError>{passwordError}</RedError>
            <Rectangle onClick={ccc}>로그인</Rectangle>
            <MenuWrapper>
                <Mask>이메일 찾기</Mask>
                <Mask>|</Mask>
                <Mask>비밀번호 찾기</Mask>
                <Mask>|</Mask>
                <Mask>회원가입</Mask>
            </MenuWrapper>
            <Rectangle2>카카오톡으로 로그인</Rectangle2>

        </Wrapper>
    )
}
