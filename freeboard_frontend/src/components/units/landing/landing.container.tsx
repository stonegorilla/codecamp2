import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";
import LandingUI from "./landing.presenter";
import { FETCH_USER_LOGGED_IN } from "./landing.queries";

export default function Landing() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    //@ts-ignore
    <LandingUI data={data} />
  );
}
