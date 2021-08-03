import { setTwoToneColor } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";

export default function ImagePreLoadPage() {
  const [image, setImage] = useState("");
  const divRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      setImage(img); // <img는 태그임 ===> src="https://codebootcamp.co.kr/images/main/homeImage1.webp" />
    };
  }, []);

  function onClickButton() {
    divRef.current?.appendChild(image);
    // 버튼을 클릭하면 image가 보여진다. appendChild 는 여기선 image를 보여주게 하는 역할인 것 같다.
  }

  return (
    // 이미 다 불러온 것이다.
    <>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보여주기</button>
    </>
  );
}

// 여기서는 이미 이미지를 불러놓고 클릭하면 바로 보여주는 것이다. 개발자 도구에서 network 탭에 가면 이미 불려진 이미지에 대한
// 정보가 존재한다.
