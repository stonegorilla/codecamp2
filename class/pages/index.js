// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import {Title, Name, Wrapper, Id, Password} from '../styles/Home.styles'   //Home.styles 를 가져와랴
export default function Home() {


  return (
    // 반드시 무언가 하나로 감싸주어라
    <Wrapper>
      <Title>로그인</Title>
      <Name>아이디</Name>
      <Id type="text"></Id>
      <Name>비밀번호</Name>
      <Password type="password" placeholder="paaa"></Password>
    </Wrapper>

  )
}
