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
