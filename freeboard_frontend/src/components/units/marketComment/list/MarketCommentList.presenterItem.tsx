import { DELETE_USED_ITEM_QUESTION } from "./MarketCommentList.queries";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Row, Column } from "./MarketCommentList.styles";
import { useRouter } from "next/router";
import MarketCommentWrite from "../write/MarketCommentWrite.container";
import MarketCommentAnswerWrite from "../answerwrite/MarketCommentAnswerWrite.container";
import MarketCommentAnswerList from "../answerlist/MarketCommentAnswerList.container";
export default function MarketCommentListUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [recomment, setRecomment] = useState(false);

  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  function onClickUpdate() {
    setIsEdit(true);
  }

  async function onCommentDelete(event) {
    try {
      const result = await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: event.target.value,
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

  function onCommentAnswerHide(event) {
    if (recomment) setRecomment(false);
    else setRecomment(true);
  }
  return (
    <>
      {!isEdit && (
        <>
          <Row key={props.data._id}>
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

              <button
                name="commentid"
                value={props.data._id}
                onClick={onCommentDelete}
              >
                딜리트
              </button>

              <button
                name="commentid"
                value={props.data._id}
                onClick={onCommentAnswer}
              >
                리댓
              </button>
              <button value={props.data._id} onClick={onCommentAnswerHide}>
                숨길까말까
              </button>
            </Column>
          </Row>
          {isAnswer && (
            <MarketCommentAnswerWrite
              datgeul={props.data}
              isAnswer={isAnswer}
              setIsAnswer={setIsAnswer}
            />
          )}
          {recomment && <MarketCommentAnswerList datgeul={props.data} />}
        </>
      )}

      {isEdit && (
        <MarketCommentWrite
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
