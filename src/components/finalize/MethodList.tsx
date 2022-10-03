import MethodCard from "./MethodCard";
import { dataContext } from "../../ContextProvider";
import { useContext } from "react";
import { Box } from "@mui/material";
import { finalizeOptionsType } from "../../types/finalizeOptionsType";

const MethodList = ({ options }: { options: any }) => {
  const { selected } = useContext(dataContext);
  const isTrue = (): boolean => {
    return options.some((item: finalizeOptionsType) => item.selected === true);
  };

  console.log(isTrue());
  return (
    <Box>
      {isTrue()
        ? options.map((option: finalizeOptionsType) =>
            option.selected ? (
              <MethodCard
                name={option.name}
                key={option.key}
                imgUrl={option.imgUrl}
              />
            ) : null
          )
        : options.map((option: finalizeOptionsType) => (
            <MethodCard
              name={option.name}
              key={option.key}
              imgUrl={option.imgUrl}
            />
          ))}
    </Box>
  );
};

export default MethodList;
