export default function BrowserStorage() {
  const onSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "bbb=철수2";
    document.cookie = "ccc=맹구";
  };
  // cookie 방식으로 저장할때는 document.cookie 이런 식으로 저장한다.
  // 예전에 어떤 사이트에 들어갔냐에 따라 cookie에 다른 것이 이미 들어가 있을 수 있다.
  const onSaveLocalStorage = () => {
    localStorage.setItem("bbb", "영희");
  };

  const onSaveSessionStorage = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onLoadCookie = () => {
    //document.cookie = "aaa=철수";
    // 근데 왜 나는 document.cookie 가 그냥 aaa= 철수 가 나오지?
    let asdf;
    console.log(document.cookie);
    document.cookie.split(";").forEach((data) => {
      if (data.startsWith("aaa=")) asdf = data;
    });
    console.log(asdf.split("=")[1]);
  };

  const onLoadLocalStorage = () => {
    //localStorage.setItem("bbb", "영희");
    const asdf = localStorage.getItem("bbb");
    console.log("asdf :", asdf);
  };

  const onLoadSessionStorage = () => {
    //sessionStorage.setItem("ccc", "훈이");
    const qwer = sessionStorage.getItem("ccc");
    console.log("qwer :", qwer);
  };

  return (
    <>
      <button onClick={onSaveCookie}>쿠키에 저장하기</button>
      <button onClick={onSaveLocalStorage}>로컬스토리지에 저장하기</button>
      <button onClick={onSaveSessionStorage}>세션스토리지에 저장하기</button>
      =================================================================================
      <button onClick={onLoadCookie}>쿠키 불러오기</button>
      <button onClick={onLoadLocalStorage}>로컬스토리지 불러오기</button>
      <button onClick={onLoadSessionStorage}>세션스토리지 불러오기</button>
    </>
  );
}

// cookie
