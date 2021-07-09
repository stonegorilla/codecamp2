import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import '../styles/globals.css'

// 원래 index.js 를 바로 실행하는 것이 아니라 이 app.js 라는 것을 지나간다.
function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri : 'http://backend02.codebootcamp.co.kr/graphql',
    cache : new InMemoryCache()
  })
  // uri 는 백엔드 API가 있는 주소

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>

  // 여기서 Component 가 index.js
  )
}

export default MyApp
