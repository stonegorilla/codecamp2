import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { useEffect } from "react";

// import { Global } from "@emotion/react";
// import { globalStyles } from "../src/commons/styles/globalStyles";
// 원래 index.js 를 바로 실행하는 것이 아니라 이 app.js 라는 것을 지나간다.

interface IContext {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  userInfo: any;
  setUserInfo: any;
}
export const GlobalContext = createContext<IContext>({});
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
  };

  const uploadLink = createUploadLink({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${
        (typeof window !== "undefined" &&
          localStorage.getItem("accessToken")) ||
        ""
      }`,
    },
  });

  const client = new ApolloClient({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });
  // uri 는 백엔드 API가 있는 주소

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Layout>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>

    // 여기서 Component 가 index.js
  );
}

export default MyApp;
