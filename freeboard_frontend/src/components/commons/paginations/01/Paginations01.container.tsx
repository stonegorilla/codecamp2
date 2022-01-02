import { MouseEvent, useState } from "react";
import { IPaginations01Props } from "./Paginations01.types";
import Paginations01UI from "./Paginations01.presenter";

export default function Paginations01(props: IPaginations01Props) {
  const lastPage = Math.ceil(Number(props.count) / 10);

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    const activedPage = Number((event.target as Element).id);
    props.setActivedPage(activedPage);
    props.refetch({ page: activedPage });
    history.pushState({ page: activedPage }, "", `?page=${activedPage}`);
  }

  function onClickPrevPage() {
    if (props.startPage <= 1) return;
    props.setActivedPage(props.startPage - 10);
    props.setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (props.startPage + 10 > lastPage) return;
    props.setActivedPage(props.startPage + 10);
    props.setStartPage((prev) => prev + 10);
  }

  return (
    <Paginations01UI
      startPage={props.startPage}
      lastPage={lastPage}
      activedPage={props.activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
