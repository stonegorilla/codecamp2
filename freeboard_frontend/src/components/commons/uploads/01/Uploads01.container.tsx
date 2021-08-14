import { useRef, useState } from "react";
import { checkValidationFile } from "../../../../commons/libraries/validations";
import Uploads01UI from "./Uploads01.presenter";

export default function Uploads01(props) {
  const fileRef = useRef(null);
  const [fileUrl, setFileUrl] = useState("");

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event) {
    const file: any = event.target.files?.[0];
    if (!checkValidationFile(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setFileUrl(data.target?.result as string);
      props.onChangeFiles(file, props.index);
    };
  }
  // 그러면 위의 file을 어떻게 뽑느냐
  // 아래와 같이 뽑는다.

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
