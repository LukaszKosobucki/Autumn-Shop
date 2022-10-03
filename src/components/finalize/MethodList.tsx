import MethodCard from "./MethodCard";
import { dataContext } from "../../ContextProvider";
import { useContext } from "react";

const MethodList = ({ options }: any) => {
  const { selected } = useContext(dataContext);
  return (
    <div>
      {selected
        ? null
        : options.map((option: any) => (
            <MethodCard name={option.name} key={option.key} />
          ))}
    </div>
  );
};

export default MethodList;
