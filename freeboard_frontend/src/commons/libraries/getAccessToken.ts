import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
// 1. refreshToken 으로 새로운 accessToken을 발급 받기

export const getAccessToken = async (setAccessToken) => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend02.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);
    return newAccessToken;
    // useMutation(RESTORE_ACCESS_TOKEN);
  } catch (error) {
    console.log(error.message);
  }
};

// 이 getAccessToken 이라는 함수는 accessToken이 만료되었을 때 , 다시 accessToken을 받아오는 함수이다.
// 그리고 credentials : "include" 는 refreshToken
