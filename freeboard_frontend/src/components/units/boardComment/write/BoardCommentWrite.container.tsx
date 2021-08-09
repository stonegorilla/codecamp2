import { useMutation, useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import { useState, MouseEvent, ChangeEvent } from "react";

import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";

import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
  FETCH_BOARD,
} from "./BoardCommentWrite.queries";

const commentinputsInit = {
  writer: "",
  password: "",
  contents: "",
  rating: 0,
};
export default function BoardCommentWrite(props) {
  const router = useRouter();
  const [commentid, setCommentId] = useState("");
  const [commentinputs, setCommentInputs] = useState(commentinputsInit);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.aaa,
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

  function onChangeStar(value: number) {
    setCommentInputs({ ...commentinputs, rating: value });
  } // 얜 나중에 별만들면서 쓸 것

  async function onCommentSubmit() {
    console.log(commentinputs.password);
    try {
      await createBoardComment({
        variables: {
          cBC: {
            ...commentinputs,
          },
          boardId: router.query.aaa,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.aaa },
          },
        ],
      });
      setCommentInputs(commentinputsInit);
      // alert("댓글등록되었습니다.");
      // router.push(`/boards/${router.query.aaa}`);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onCommentEdit(event: MouseEvent<HTMLButtonElement>) {
    console.log(event.target.id);
    try {
      const result = await updateBoardComment({
        variables: {
          uBC: {
            contents: commentinputs.contents,
            rating: 3,
          },
          password: "123",
          boardCommentId: props.data._id,
        },
      });

      alert("수정되셨습니다. ");
      props.setIsEdit?.(false);
      router.push(`/boards/${router.query.aaa}`);
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
