import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import MarketCommentListUI from "./MarketCommentList.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./MarketCommentList.queries";

export default function MarketCommentList() {
  const router = useRouter();
  const { data: commentdata } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: router.query.bbb,
    },
  });

  return <MarketCommentListUI commentdata={commentdata} />;
}
