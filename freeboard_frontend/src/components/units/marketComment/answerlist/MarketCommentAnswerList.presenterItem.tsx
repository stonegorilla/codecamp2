import { DELETE_USED_ITEM_QUESTION_ANSWER } from "./MarketCommentAnswerList.queries";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Row, Column } from "./MarketCommentAnswerList.styles";
import { useRouter } from "next/router";
import MarketCommentAnswerWrite from "../answerwrite/MarketCommentAnswerWrite.container";
export default function MarketCommentAnswerListUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  function onClickUpdate() {
    setIsEdit(true);
  }

  async function onCommentDelete(event) {
    try {
      const result = await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: event.target.value,
        },
      });
      alert("삭제되셨습니다.");
      router.push(`/market/detail/${router.query.bbb}`);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onCommentAnswer(event) {
    setIsAnswer(true);
  }
  return (
    <>
      {!isEdit && (
        <>
          <Row key={props.data._id}>
            <Column>{props.data._id}</Column>
            <Column>{props.data.user.name}</Column>
            <Column>{props.data.contents}</Column>

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
        <MarketCommentAnswerWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          data={props.data}
        />
      )}
      {/* {isAnswer && (
        <MarketCommentAnswer
          isAnswer={isAnswer}
          setIsAnswer={setIsAnswer}
          data={props.data}
        />
      )} */}
    </>
  );
}
