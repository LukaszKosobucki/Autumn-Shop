import {
  Box,
  CardContent,
  CardMedia,
  Typography,
  ToggleButton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useContext } from "react";
import { dataContext } from "../../ContextProvider";
import { finalizeOptionsType } from "../../types/finalizeOptionsType";
import { methodCardInterface } from "../../interfaces/methodCardInterface";

const MethodCard = ({ name, imgUrl, selected }: methodCardInterface) => {
  const {
    deliveryOptions,
    setDeliveryOptions,
    paymentOptions,
    setPaymentOptions,
  } = useContext(dataContext);
  const placeholderOnClick = (): void => {
    if (deliveryOptions.some((e: finalizeOptionsType) => e.name === name)) {
      const index = deliveryOptions.findIndex(
        (e: finalizeOptionsType) => e.name === name
      );
      const newDeliveryOptions = deliveryOptions;
      newDeliveryOptions[index].selected = !deliveryOptions[index].selected;
      setDeliveryOptions([...newDeliveryOptions]);
    } else {
      const index = paymentOptions.findIndex(
        (e: finalizeOptionsType) => e.name === name
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
        color: "#3d405b",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        minWidth: 320,
        mb: 1,
      }}
    >
      <Box
        sx={{
          flexWrap: "wrap",
          color: "#3d405b",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          width: 100,
        }}
      >
        <CardMedia
          component="img"
          height="100"
          image={imgUrl}
          alt="green iguana"
        />
      </Box>

      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            placeholderOnClick();
          }}
        >
          {selected && <CheckIcon sx={{ p: 0, m: 0 }} />}
        </ToggleButton>
      </CardContent>
    </Box>
  );
};

export default MethodCard;
