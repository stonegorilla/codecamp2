import { ListItemSecondaryAction } from "@material-ui/core";
import { useEffect, useState } from "react";

export default function BasketLoggedInPage() {
  const [baskets, setBaskets] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(items);
  }, []);

  return (
    <>
      <div>비회원으로 담은 장바구니</div>
      {baskets.map((data) => (
        <div key={data._id}>
          <span>{data.writer}</span>
          <span>{data.title}</span>
        </div>
      ))}
      <span>{}</span>
    </>
  );
}
