import { useRef, useState } from "react";
import Uploads01UI from "./Uploads01.presenter";

export default function Uploads01() {
  const fileRef = useRef(null);
  const [fileUrl, setFileUrl] = useState("");

  function onClickUpload() {
    fileRef.current?.click();
  }
  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={fileUrl}
      onClickUpload={onClickUpload}
    />
  );
}
