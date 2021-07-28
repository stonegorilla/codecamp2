import { CREATE_BOARD, UPDATE_BOARD , UPLOAD_FILE} from "./BoardWrite.queries";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react"; // useState 는 동적인 웹 만들때 많이 사용할 것 같으니 넣어주자. 그리고 이 페이지에선 쓰인다.
import BoardWriteUI from "./BoardWrite.presenter";
import { Modal } from "antd";
import { useRef } from "react";

const inputsInit = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  youtubeUrl: "",
  
};
interface newInputs {
  title?: String;
  contents?: String;
}
interface DataTypes {
  writer: string;
  title: string;
  contents: string;
}

interface IProps {
  isEdit?: boolean;
  data?: DataTypes;
}

export default function BoardWrite(props: IProps) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState(inputsInit);
  const [isOpenAddress, setIsOpenAddress] = useState(false);

  const [address, setAddress] = useState("");
  const [zoneCode, setZoneCode] = useState("");

  // const [writer, setWriter] = useState('')
  // const [password, setPassword] = useState('')
  // const [title, setTitle] = useState('')
  // const [contents, setContents] = useState('')

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [active, setActive] = useState(true);

  const [qqq] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  function onClose() {
    setIsOpen(false);
    router.push(`/boards/`);
  }

  function onChangeInputs(event) {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    setInputs(newInputs);
    if (Object.values(newInputs).every((data) => data)) setActive(false);
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file?.size) {
      alert("파일이 없다고");
      return;
    }
    if (file?.size > 5 * 1024 * 1024) {
      alert("파일 사이즈가 너무크니까 올리지마(제한 5MB)");
      return;
    }

    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
      alert("png또는 jpeg만 전송가능");
      return;
    }

    try {
      const result = await uploadFile({
        variables: {
          bbb: file,
        },
      });
      console.log(result.data.uploadFile.url);
      setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickGreyBox() {
    fileRef.current?.click();
  }
  
  async function RedTrigger(event) {
    if (inputs.writer === "") {
      setWriterError("작성자 이름을 입력해 주세요");
    } else {
      setWriterError("");
    }
    if (inputs.password === "") {
      setPasswordError("비밀번호를 입력해 주세요");
    } else {
      setPasswordError("");
    }
    if (inputs.title === "") {
      setTitleError("제목을 입력해 주세요");
    } else {
      setTitleError("");
    }
    if (inputs.contents === "") {
      setContentsError("내용을 입력해 주세요");
    } else {
      setContentsError("");
    }

    if (
      inputs.writer !== "" &&
      inputs.password !== "" &&
      inputs.title !== "" &&
      inputs.contents !== ""
    ) {
      try {
        const result = await qqq({
          variables: {
            aaa: {
              writer: inputs.writer,
              password: inputs.password,
              title: inputs.title,
              contents: inputs.contents,
              youtubeUrl: inputs.youtubeUrl,
              images : [imageUrl],
              
            },
          },
        });
        Modal.confirm({
          content: "게시물이 성공적으로 등록되었습니다.",
          onOk: () => router.push(`/boards/${result.data.createBoard._id}`),
        });
        setIsOpen(true);
        // router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }

      // 이름, 비밀번호, 제목, 내용, 주소 결과값을 이용해 비어있는 값이 있으면 빨간 경고 글씨를 내보낸다.
    }
  }

  async function onClickEdit() {
    const newInputs = {};
    if (inputs.title) newInputs.title = inputs.title;
    if (inputs.contents) newInputs.contents = inputs.contents;
    if (inputs.youtubeUrl) newInputs.youtubeUrl = inputs.youtubeUrl;

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.aaa,
          password: inputs.password,
          updateBoardInput: { ...newInputs },
        },
      });
      Modal.confirm({
        content: "게시물이 성공적으로 수정되었습니다.",
        onOk: () => router.push(`/boards/${result.data.updateBoard._id}`),
      });
      // alert(result.data.updateBoard._id);
      // router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  }

  function onComplete(data) {
    setAddress(data.address);
    setZoneCode(data.zonecode);
    setIsOpenAddress(false);
  }
  function onClickCancel() {
    setIsOpenAddress(false);
  }
  function onClickOpenModal() {
    setIsOpenAddress(true);
  }
  return (
    <BoardWriteUI
      isOpen={isOpen}
      onClose={onClose}
      onChangeInputs={onChangeInputs}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      RedTrigger={RedTrigger}
      onClickEdit={onClickEdit}
      fff={active}
      isEdit={props.isEdit}
      data={props.data}
      isOpenAddress={isOpenAddress}
      onClickCancel={onClickCancel}
      onComplete={onComplete}
      onClickOpenModal={onClickOpenModal}
      address={address}
      zoneCode={zoneCode}
      fileRef = {fileRef}
      onChangeFile = {onChangeFile}
      imageUrl = {imageUrl}
      onClickGreyBox = {onClickGreyBox}
    />
  );
}
