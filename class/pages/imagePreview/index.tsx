import { SettingFilled } from "@ant-design/icons";
import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
const UPLOAD_FILE = gql`
  mutation uploadFile($aaa: Upload!) {
    uploadFile(file: $aaa) {
      url
    }
  }
`;
// googleapis에 올리는 것 (클라우드에 올리는 것)
const CREATE_BOARD = gql`
  mutation createBoard($bbb: CreateBoardInput!) {
    createBoard(createBoardInput: $bbb) {
      _id
    }
  }
`;
//  createboard의 createBoardInput 에 writer, password, title, contents , imageUrl 을 넣는다.

export default function ImagePreviwPage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // 얘네들은 이제 조연으로 많이 나온다. 그냥 createboard 할때마다 따라나오는 얘들
  const [imageUrl, setImageUrl] = useState("");
  // 얘도 이제 createboard 할때마다 들어갈 녀석이다.
  const [file, setFile] = useState("");

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  // 얘네들은 이제 쿼리문 실행해서 나온 결과들
  // 아폴로 클라이언트라는 곳에서 useMutation 이라는 것을 제공해준다. useMutation은 쿼리문을 결과?로 만들어준다.
  function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    // 여기서 0의 의미는 뭘까? 보니까 File 에 대한 정보를 가지고 있었다.
    // 언제 마지막으로 바꾸었는지, 파일이름, 사이즈 ,파일타입(jpg,jpeg 등등)

    // if(!file?.size){
    //     if(file.size >5*1024*1024){
    //         if(!file?.type.includes('png') && !file?.type.includes("jpeg")){

    //         }else{
    //             alert("잘못된 파일 입니다.")
    //         }
    //     }else{
    //         alert("파일이 너무 큽니다.")
    //     }
    // }else{
    //     alert("파일이 없습니다.")
    // }

    // 위와 같이 하면 코드보는 것이 어렵다 (클린코드도 달성할 수 없다. )

    // 아래는 early exit 패턴이다 . 코드 보기에 엄청 깔끔하고 더 좋다.

    if (!file?.size) {
      alert("파일이 없습니다.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("파일이 너무 큽니다. (제한: 5MB)");
      return;
    }
    if (!file?.type.includes("png") && !file?.type.includes("jpeg")) {
      alert("잘못된 파일입니다.");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (data) => {
      setImageUrl(data.target.result);
      // 임시 주소 (겁나 말도안되게 긴것) (얘는 어디다 쓰냐-> <img src=임시주소>하면 미리보기 가능)
      setFile(file);
      // onChangefile안에서 선언한 file을 이제 uploadfile 쿼리문으로 전해질 변수 file에 저장한다.
    };
  }

  // uploadFile

  // 미리보기 작업만 진행

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }
  // input 안의 내용들 (나중에 createboard 할때 입력변수로 보내진다.)
  async function onClickSubmit() {
    try {
      const start = performance.now();
      //performance.now() 는 웹브라우저가 작동된 시점으로부터의 시간 이다. 이를 이용하면  이미지가 업로드 되는데 걸리는 시간을 알 수 가 있다.
      const resultFiles = await Promise.all([
        uploadFile({ variables: { aaa: file } }),
        uploadFile({ variables: { aaa: file } }),
        uploadFile({ variables: { aaa: file } }),
      ]);
      const end = performance.now();

      console.log(end - start);
      console.log(resultFiles);
      //   const resultFile1 = await uploadFile({
      //     variables: {
      //       aaa: file,
      //     },
      //   });
      //   const image1 = resultFile1.data.uploadFile.url;

      const image1 = resultFiles[0].data.uploadFile.url;
      const image2 = resultFiles[1].data.uploadFile.url;
      const image3 = resultFiles[2].data.uploadFile.url;
      //   [{},{},{}] <= Promise.all([ , , ]) 나중에 자유게시판에 적용시킬때 사용 (구조분해 할당)

      const images = resultFiles.map((data) => data.data.uploadFile.url); //1번url , 2번 url, 3번 url

      const result = await createBoard({
        variables: {
          bbb: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
            images: [image1, image2, image3],
          },
        },
      });
      console.log(result.data.createBoard._id);
      alert("게시물이 등록되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <>
      <button onClick={onClickSubmit}>게시물 등록하기</button>
      <br />
      <input type="text" onChange={onChangeWriter} />
      <br />
      <input type="text" onChange={onChangePassword} />
      <br />
      <input type="text" onChange={onChangeTitle} />
      <br />
      <input type="text" onChange={onChangeContents} />
      <br />
      {/* 여기는 3개로 imageUrl1, imageUrl2, imageUrl3 만들어야 함(미리보기임) */}
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />;
      <button>게시물 등록하기</button>
    </>
  );
}
