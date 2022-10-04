import MethodCard from "./MethodCard";

import { Box, Button, Typography } from "@mui/material";
import { finalizeOptionsType } from "../../types/finalizeOptionsType";
import { dataContext } from "../../ContextProvider";
import { useContext } from "react";

const MethodList = ({ options }: { options: any }) => {
  const {
    deliveryOptions,
    setDeliveryOptions,
    paymentOptions,
    setPaymentOptions,
  } = useContext(dataContext);
  const isTrue = (): boolean => {
    return options.some((item: finalizeOptionsType) => item.selected === true);
  };
  const resetOptions = (): void => {
    if (
      deliveryOptions.some(
        (e: finalizeOptionsType) => e.name === options[0].name
      )
    ) {
      const index = deliveryOptions.findIndex(
        (e: finalizeOptionsType) => e.selected === true
      );
      const newDeliveryOptions = deliveryOptions;
      newDeliveryOptions[index].selected = !deliveryOptions[index].selected;
      setDeliveryOptions([...newDeliveryOptions]);
    } else {
      const index = paymentOptions.findIndex(
        (e: finalizeOptionsType) => e.selected === true
      );
      const newPaymentOptions = paymentOptions;
      newPaymentOptions[index].selected = !paymentOptions[index].selected;
      setPaymentOptions([...newPaymentOptions]);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flext-start",
        alignItems: "center",
        position: "relative",
        flexDirection: "column",
        bgcolor: "#e0ddcb",
        p: 5,
        mb: 2,
      }}
    >
      {isTrue()
        ? options.map((option: finalizeOptionsType) =>
            option.selected ? (
              <MethodCard
                name={option.name}
                key={option.key}
                imgUrl={option.imgUrl}
                selected={option.selected}
              />
            ) : null
          )
        : options.map((option: finalizeOptionsType) => (
            <MethodCard
              name={option.name}
              key={option.key}
              imgUrl={option.imgUrl}
              selected={option.selected}
            />
          ))}
      {isTrue() ? (
        <Button
          onClick={() => resetOptions()}
          key="xd"
          sx={{ bgcolor: "#f4f1de", pb: 0, borderRadius: "0%" }}
        >
          <Typography sx={{ fontSize: 14 }} color="#3d405b" gutterBottom>
            Change Options
          </Typography>
        </Button>
      ) : null}
    </Box>
  );
};

export default MethodList;
