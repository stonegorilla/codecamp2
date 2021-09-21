import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

import { getAccessToken } from "../src/commons/libraries/getAccessToken";
// import { Global } from "@emotion/react";
// import { globalStyles } from "../src/commons/styles/globalStyles";
// 원래 index.js 를 바로 실행하는 것이 아니라 이 app.js 라는 것을 지나간다.

interface IContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: any;
  setUserInfo?: any;
}

export const GlobalContext = createContext<IContext>({});
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 2. 발급 받은 accessToken으로 방금 실패했던 쿼리 재실행하기
          // 재실행하기 위해 포워드
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });
  const uploadLink = createUploadLink({
    uri: "https://backend03.codebootcamp.co.kr/graphql",
    // 수십개의 함수를 가지고 있다.
    // secure 문제로 https 여야함
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include", // refreshToken 쿠키에 저장 허가 ..
  });

  // const uploadLink = createUploadLink({
  //   uri: "http://backend02.codebootcamp.co.kr/graphql",
  //   headers: {
  //     authorization: `Bearer ${
  //       (typeof window !== "undefined" &&
  //         localStorage.getItem("accessToken")) ||
  //       ""
  //     }`,
  //   },
  // });

  const client = new ApolloClient({
    // uri: "http://backend02.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
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
