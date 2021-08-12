import { gql } from "@apollo/client";

// export const FETCH_USED_ITEM_QUESTION = gql`
//   query fetchUSeditem($useditemId: ID!) {
//     fetchUseditem(useditemId: $useditemId) {
//       _id
//     }
//   }
// `;

export const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation cb(
    $cBC: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $cBC
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;

export const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation ub(
    $uBC: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $uBC
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
      _id
      contents
    }
  }
`;
