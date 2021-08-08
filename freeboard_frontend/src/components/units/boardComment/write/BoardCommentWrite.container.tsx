import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
  FETCH_BOARD,
} from "./BoardCommentWrite.queries";

const commentinputsInit = {
  writer: "",
  password: "",
  contents: "",
};
export default function BoardCommentWrite() {
  const router = useRouter();
  const [commentid, setCommentId] = useState("");
  const [commentinputs, setCommentInputs] = useState(commentinputsInit);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
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

  async function onCommentSubmit() {
    console.log(commentinputs.password);
    try {
      const result = await createBoardComment({
        variables: {
          cBC: {
            writer: commentinputs.writer,
            password: commentinputs.password,
            contents: commentinputs.contents,
            rating: 0,
          },
          boardId: router.query.aaa,
        },
      });
      alert("댓글등록되었습니다.");
      router.push(`/boards/${router.query.aaa}`);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onCommentEdit() {
    try {
      const result = await updateBoardComment({
        variables: {
          uBC: {
            contents: commentinputs.contents,
            rating: 3,
          },
          password: "123",
          boardCommentId: commentid,
        },
      });
      alert("수정되셨습니다. ");
      router.push(`/boards/${router.query.aaa}`);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onCommentDelete(event) {
    try {
      const result = await deleteBoardComment({
        variables: {
          password: "123",
          boardCommentId: event.target.value,
        },
      });
      alert("삭제되셨습니다.");
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
      onCommentDelete={onCommentDelete}
    />
  );
}
