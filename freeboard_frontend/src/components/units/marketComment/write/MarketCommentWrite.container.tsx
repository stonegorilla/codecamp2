import { useMutation, useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import { useState, MouseEvent, ChangeEvent } from "react";

import { FETCH_USED_ITEM_QUESTIONS } from "../list/MarketCommentList.queries";

import BoardCommentWriteUI from "./MarketCommentWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM,
} from "./MarketCommentWrite.queries";

const commentinputsInit = {
  contents: "",
};
export default function MarketCommentWrite(props) {
  const router = useRouter();
  const [commentid, setCommentId] = useState("");
  const [commentinputs, setCommentInputs] = useState(commentinputsInit);
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.bbb,
    },
  });

  function onChangeComments(event) {
    if (event.target.name === "commentid") setCommentId(event.target.value);
    else {
      const newCommentInputs = {
        ...commentinputs,
        [event.target.name]: event.target.value,
      };
      setCommentInputs(newCommentInputs);
    }
    console.log(event.target.name);
    console.log(event.target.value);
  }

  async function onCommentSubmit() {
    try {
      await createUseditemQuestion({
        variables: {
          cBC: {
            ...commentinputs,
          },
          useditemId: router.query.bbb,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.bbb },
          },
        ],
      });
      setCommentInputs(commentinputsInit);
      alert("댓글등록되었습니다.");
      // router.push(`/markets/detail/${router.query.bbb}`);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onCommentEdit(event: MouseEvent<HTMLButtonElement>) {
    console.log(event.target.id);
    try {
      const result = await updateUseditemQuestion({
        variables: {
          uBC: {
            contents: commentinputs.contents,
          },

          useditemQuestionId: props.data._id,
        },
      });

      alert("수정되셨습니다. ");
      props.setIsEdit?.(false);
      router.push(`/market/detail/${router.query.bbb}`);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardCommentWriteUI
      onChangeComments={onChangeComments}
      onCommentSubmit={onCommentSubmit}
      onCommentEdit={onCommentEdit}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
