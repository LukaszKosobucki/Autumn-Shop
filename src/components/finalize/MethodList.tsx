import MethodCard from "./MethodCard";
import { dataContext } from "../../ContextProvider";
import { useContext } from "react";

const MethodList = ({ list }: any) => {
  const { selected, setSelected } = useContext(dataContext);
  return (
    <div>
      {selected
        ? null
        : list.map((card: any) => <MethodCard name={card.name} />)}
    </div>
  );
};

export default MethodList;
