import SellingItemUI from "./SellingItem.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEMS_I_PICKED,
  FETCH_USED_ITEMS_I_SOLD,
  FETCH_USED_ITEMS_I_BOUGHT,
} from "./SellingItem.queries";
import { useState } from "react";
export default function SellingItem() {
  const { data: fetchuseditemsisold } = useQuery(FETCH_USED_ITEMS_I_SOLD);
  const { data: fetchuseditemsipicked } = useQuery(FETCH_USED_ITEMS_I_PICKED);
  const { data: fetchuseditemsibought } = useQuery(FETCH_USED_ITEMS_I_BOUGHT);
  const [ISold, setISold] = useState(true);
  const [IPicked, setIPicked] = useState(false);
  const [IBought, setIBought] = useState(false);

  const ClickISold = () => {
    setISold(true);
    setIPicked(false);
    setIBought(false);
  };
  const ClickIPicked = () => {
    setISold(false);
    setIPicked(true);
    setIBought(false);
  };
  const ClickIBought = () => {
    setISold(false);
    setIPicked(false);
    setIBought(true);
  };
  return (
    <SellingItemUI
      fetchuseditemsisold={fetchuseditemsisold}
      fetchuseditemsipicked={fetchuseditemsipicked}
      fetchuseditemsibought={fetchuseditemsibought}
      ISold={ISold}
      IPicked={IPicked}
      IBought={IBought}
      ClickISold={ClickISold}
      ClickIPicked={ClickIPicked}
      ClickIBought={ClickIBought}
    />
  );
}
