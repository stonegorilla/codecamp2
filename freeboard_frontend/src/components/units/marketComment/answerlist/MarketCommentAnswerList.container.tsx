import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import MarketCommentAnswerListUI from "./MarketCommentAnswerList.presenter";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./MarketCommentAnswerList.queries";

export default function MarketCommentAnswerList(props) {
  const router = useRouter();
  console.log(props.datgeul);
  const { data: commentdata } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.datgeul._id,
    },
  });

  return <MarketCommentAnswerListUI commentdata={commentdata} />;
}
