import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";

import { useState } from "react";

const commentinputsInit = {
  writer: "",
  password: "",
  contents: "",
};

export default function BoardDetail(props) {
  const router = useRouter();
  const [commentid, setCommentId] = useState("");
  const [commentinputs, setCommentInputs] = useState(commentinputsInit);
  const [isOpen, setIsOpen] = useState(false);

  const { data: aaaa } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.aaa,
    },
  });

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.aaa,
    },
  });

  // console.log(commentdata)
  // console.log(router.query.aaa)
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  function onClose() {
    setIsOpen(false);
    router.push(`/boards/`);
  }

  async function onClickDelete(event) {
    // alert("해당 글을 삭제합니다~");

    try {
      await deleteBoard({
        variables: { boardId: router.query.aaa },
        // refetchQueries: [{query : FETCH_BOARDS}]
      });
      setIsOpen(true);
      // router.push("/boards");
    } catch (error) {}
  }

  function gotoList() {
    router.push("/boards");
    console.log(router);
  }

  function gotoEdit() {
    router.push(`/boards/${router.query.aaa}/edit`);
  }

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

  async function LikeUp(event) {
    await likeBoard({
      variables: {
        boardId: router.query.aaa,
      },
    });
    alert("게시글좋아요");
    router.push(`/boards/${router.query.aaa}`);
  }

  async function DislikeUp(event) {
    await dislikeBoard({
      variables: {
        boardId: router.query.aaa,
      },
    });
    alert("게시글싫어요");
    router.push(`/boards/${router.query.aaa}`);
  }
  let video;
  if (data == null) video = "";
  else if (data.fetchBoard.youtubeUrl == null) video = "";
  else video = data.fetchBoard.youtubeUrl;
  return (
    <BoardDetailUI
      onClose={onClose}
      isOpen={isOpen}
      onClickDelete={onClickDelete}
      gotoList={gotoList}
      gotoEdit={gotoEdit}
      qqq={data}
      commentdata={aaaa}
      onChangeComments={onChangeComments}
      onCommentSubmit={onCommentSubmit}
      onCommentEdit={onCommentEdit}
      onCommentDelete={onCommentDelete}
      video={video}
      LikeUp={LikeUp}
      DislikeUp={DislikeUp}
    />
  );
}
