import ContextPropsUI from "./ContextProps.presenter";

interface Iprops {
  isEdit: boolean;
}

export default function ContextProps(props: Iprops) {
  return <ContextPropsUI isEdit={props.isEdit} />;
}
