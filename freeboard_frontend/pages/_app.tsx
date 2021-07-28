import { ApolloClient,ApolloLink, InMemoryCache, ApolloProvider } from "@apollo/client";

import "../styles/globals.css";
import "antd/dist/antd.css";
import {createUploadLink } from "apollo-upload-client";

import Layout from "../src/components/commons/layout";
// import { Global } from "@emotion/react";
// import { globalStyles } from "../src/commons/styles/globalStyles";
// 원래 index.js 를 바로 실행하는 것이 아니라 이 app.js 라는 것을 지나간다.
function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri : "http://backend02.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });
  // uri 는 백엔드 API가 있는 주소

  return (
    <ApolloProvider client={client}>
      <Layout>
      {/* <Global styles={globalStyles} /> */}
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>

    // 여기서 Component 가 index.js
  );
}

export default MyApp;
