import MethodCard from "./MethodCard";
import { Grid, Button, Typography } from "@mui/material";
import { finalizeOptionsType } from "../../types/finalizeOptionsType";
import { dataContext } from "../../ContextProvider";
import { useContext } from "react";
import styles from "../../palette.module.scss";

const MethodList = ({ options }: { options: finalizeOptionsType[] }) => {
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
    <Grid
      sx={{
        alignItems: "center",
        position: "relative",
        bgcolor: styles.colorAutumnLight100,
        p: 5,
        mb: 2,
        transition: "0.5s",
      }}
    >
      {isTrue()
        ? options.map(
            (option: finalizeOptionsType) =>
              option.selected && (
                <MethodCard
                  name={option.name}
                  key={option.key}
                  imgUrl={option.imgUrl}
                  selected={option.selected}
                />
              )
          )
        : options.map((option: finalizeOptionsType) => (
            <MethodCard
              name={option.name}
              key={option.key}
              imgUrl={option.imgUrl}
              selected={option.selected}
            />
          ))}
      {isTrue() && (
        <Button onClick={() => resetOptions()}>
          <Typography color="primary" variant="caption">
            Change Options
          </Typography>
        </Button>
      )}
    </Grid>
  );
};

export default MethodList;
