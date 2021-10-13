
import SellingItemUI from "./SellingItem.presenter";
import { useQuery } from "@apollo/client";
import {
    FETCH_USED_ITEMS_I_PICKED,
  FETCH_USED_ITEMS_I_SOLD,
  FETCH_USED_ITEMS_I_BOUGHT,
} from "./SellingItem.queries"
export default function SellingItem(){
    const { data: fetchuseditemsisold } = useQuery(FETCH_USED_ITEMS_I_SOLD);
  const { data: fetchuseditemsipicked } = useQuery(FETCH_USED_ITEMS_I_PICKED);
  const { data: fetchuseditemsibought } = useQuery(FETCH_USED_ITEMS_I_BOUGHT);
    return <SellingItemUI 
    fetchuseditemsisold={fetchuseditemsisold}
    fetchuseditemsipicked={fetchuseditemsipicked}
    fetchuseditemsibought={fetchuseditemsibought}
    />
}