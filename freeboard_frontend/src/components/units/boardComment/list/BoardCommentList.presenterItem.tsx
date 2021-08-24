import { DELETE_BOARD_COMMENT } from "./BoardCommentList.queries";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Row, Column } from "./BoardCommentList.styles";
import { useRouter } from "next/router";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
export default function BoardCommentListUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }

  async function onCommentDelete(event) {
    try {
      await deleteBoardComment({
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
    <>
      {!isEdit && (
        <>
          <Row key={props.data._id}>
            <Column>{props.data._id}</Column>
            <Column>{props.data.writer}</Column>
            <Column>{props.data.contents}</Column>
            <Column>{props.data.rating}</Column>
            <Column>
              <button
                name="commentid"
                id={props.data._id}
                onClick={onClickUpdate}
              >
                에디트
              </button>
            </Column>
            <Column>
              <button
                name="commentid"
                value={props.data._id}
                onClick={onCommentDelete}
              >
                딜리트
              </button>
            </Column>
          </Row>
        </>
      )}

      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          data={props.data}
        />
      )}
    </>
  );
}
