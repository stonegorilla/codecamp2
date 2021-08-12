import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUSeditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
    }
  }
`;

export const CREATE_USED_ITEM_QUESTION = gql`
  mutation cb($cBC: CreateUseditemQuestionInput!, $useditemId: ID!) {
    createUseditemQuestion(
      createUseditemQuestionInput: $cBC
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

export const UPDATE_USED_ITEM_QUESTION = gql`
  mutation ub($uBC: UpdateUseditemQuestionInput!, $useditemQuestionId: ID!) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $uBC
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;
