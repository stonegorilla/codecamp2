import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";

import { useState, useEffect } from "react";
import axios from "axios";

export default function BoardDetail(props) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.aaa,
    },
  });

  // console.log(commentdata)
  // console.log(router.query.aaa)
  const [deleteBoard] = useMutation(DELETE_BOARD);

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

  useEffect(() => {
    const getImg = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setImgUrl(result.data.message);
    };
    getImg();
  }, []);
  return (
    <BoardDetailUI
      onClose={onClose}
      isOpen={isOpen}
      onClickDelete={onClickDelete}
      gotoList={gotoList}
      gotoEdit={gotoEdit}
      qqq={data}
      imgUrl={imgUrl}
      video={video}
      LikeUp={LikeUp}
      DislikeUp={DislikeUp}
    />
  );
}
