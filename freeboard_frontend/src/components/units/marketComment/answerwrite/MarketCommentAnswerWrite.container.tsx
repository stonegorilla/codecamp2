import { useMutation, useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import { useState, MouseEvent, ChangeEvent } from "react";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../answerlist/MarketCommentAnswerList.queries";

import BoardCommentAnswerWriteUI from "./MarketCommentAnswerWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./MarketCommentAnswerWrite.queries";

const commentinputsInit = {
  contents: "",
};
export default function MarketCommentAnswerWrite(props) {
  console.log(props.data);

  const router = useRouter();
  const [commentid, setCommentId] = useState("");
  const [commentinputs, setCommentInputs] = useState(commentinputsInit);
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  // const { data } = useQuery(FETCH_USED_ITEM, {
  //   variables: {
  //     useditemId: router.query.bbb,
  //   },
  // });
  console.log(commentinputs.contents);
  function onChangeComments(event) {
    if (event.target.name === "commentid") setCommentId(event.target.value);
    else {
      const newCommentInputs = {
        ...commentinputs,
        [event.target.name]: event.target.value,
      };
      setCommentInputs(newCommentInputs);
    }
  }

  async function onCommentSubmit() {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          cBC: {
            ...commentinputs,
          },
          useditemQuestionId: props.datgeul._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.datgeul._id },
          },
        ],
      });
      setCommentInputs(commentinputsInit);
      alert("응응응응응.");
      props.setIsAnswer(false);
      // router.push(`/markets/detail/${router.query.bbb}`);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onCommentEdit(event: MouseEvent<HTMLButtonElement>) {
    try {
      const result = await updateUseditemQuestionAnswer({
        variables: {
          uBC: {
            contents: commentinputs.contents,
          },

          useditemQuestionAnswerId: props.data._id,
        },
      });

      alert("아아아아아. ");
      props.setIsEdit?.(false);
      // router.push(`/market/detail/${router.query.bbb}`);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardCommentAnswerWriteUI
      onChangeComments={onChangeComments}
      onCommentSubmit={onCommentSubmit}
      onCommentEdit={onCommentEdit}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
