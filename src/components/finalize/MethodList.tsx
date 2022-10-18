import MethodCard from "./MethodCard";
import { Grid, Button, Typography } from "@mui/material";
import { finalizeOptionsType } from "../../types/finalizeOptionsType";
import { dataContext } from "../../ContextProvider";
import { useContext } from "react";
import styles from "../../palette.module.scss";
import resetFinalizeOptions from "../../utils/componentsFunctions/resetFinalizeOptions";

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

  return (
    <Grid
      sx={{
        alignItems: "center",
        bgcolor: styles.colorAutumnLight100,
        p: "2.5rem",
        mb: "1rem",
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
        <Button
          data-testid="buttonMethodCard"
          onClick={() => {
            const placeholder = resetFinalizeOptions(
              deliveryOptions,
              paymentOptions,
              options
            );

            setDeliveryOptions(placeholder.deliveryOptions);
            setPaymentOptions(placeholder.paymentOptions);
          }}
        >
          <Typography color="primary" variant="caption">
            Change Options
          </Typography>
        </Button>
      )}
    </Grid>
  );
};

export default MethodList;
