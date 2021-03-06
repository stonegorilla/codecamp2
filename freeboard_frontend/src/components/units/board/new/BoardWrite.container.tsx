// @ts-nocheck
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState, useRef } from "react"; // useState 는 동적인 웹 만들때 많이 사용할 것 같으니 넣어주자. 그리고 이 페이지에선 쓰인다.
import BoardWriteUI from "./BoardWrite.presenter";
import { Modal } from "antd";

const inputsInit = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  youtubeUrl: "",
};
// interface newInputs {
//   title?: String;
//   contents?: String;
// }
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
  const fileRef1 = useRef<HTMLInputElement>(null);
  const fileRef2 = useRef<HTMLInputElement>(null);
  const fileRef3 = useRef<HTMLInputElement>(null);
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
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

  async function onChangeFile1(event: ChangeEvent<HTMLInputElement>) {
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

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl1(data.target?.result);
      setFile1(file);
    };
  }

  async function onChangeFile2(event: ChangeEvent<HTMLInputElement>) {
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

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl2(data.target.result);
      setFile2(file);
    };
  }

  async function onChangeFile3(event: ChangeEvent<HTMLInputElement>) {
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

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl3(data.target.result);
      setFile3(file);
    };
  }

  function onClickGreyBox1() {
    fileRef1.current?.click();
  }
  function onClickGreyBox2() {
    fileRef2.current?.click();
  }
  function onClickGreyBox3() {
    fileRef3.current?.click();
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
        const resultFiles = await Promise.all([
          uploadFile({ variables: { bbb: file1 } }),
          uploadFile({ variables: { bbb: file2 } }),
          uploadFile({ variables: { bbb: file3 } }),
        ]);

        const image1 = resultFiles[0].data.uploadFile.url;
        const image2 = resultFiles[1].data.uploadFile.url;
        const image3 = resultFiles[2].data.uploadFile.url;

        // const images = resultFiles.map((data) => data.data.uploadFile.url);
        console.log("aaa", image1);
        console.log("bbb", imageUrl1);
        console.log("ccc", file1);
        const result = await qqq({
          variables: {
            aaa: {
              writer: inputs.writer,
              password: inputs.password,
              title: inputs.title,
              contents: inputs.contents,
              youtubeUrl: inputs.youtubeUrl,
              images: [image1, image2, image3],
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
      fileRef1={fileRef1}
      fileRef2={fileRef2}
      fileRef3={fileRef3}
      onChangeFile1={onChangeFile1}
      onChangeFile2={onChangeFile2}
      onChangeFile3={onChangeFile3}
      imageUrl1={imageUrl1}
      imageUrl2={imageUrl2}
      imageUrl3={imageUrl3}
      onClickGreyBox1={onClickGreyBox1}
      onClickGreyBox2={onClickGreyBox2}
      onClickGreyBox3={onClickGreyBox3}
    />
  );
}
