import {
  Grid,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Card,
} from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { useContext } from "react";
import { dataContext } from "../../ContextProvider";
import { finalizeOptionsType } from "../../types/finalizeOptionsType";
import { methodCardInterface } from "../../interfaces/methodCardInterface";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import colors from "../../palette.module.scss";

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
    <Card
      sx={{
        display: "flex",
        flexWrap: "wrap",
        color: "#3d405b",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        mb: "0.5rem",
        bgcolor: colors.colorAutumnLight50,
      }}
    >
      <Grid
        sx={{
          alignItems: "center",
          flexDirection: "row",
          width: "6.25rem",
        }}
      >
        <CardMedia
          component="img"
          height="100"
          image={imgUrl}
          alt="green iguana"
        />
      </Grid>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "11.25rem",
        }}
      >
        <Typography color="primary" variant="h5" sx={{ maxWidth: "9.375rem" }}>
          {name}
        </Typography>

        {selected ? (
          <IconButton
            onClick={() => {
              placeholderOnClick();
            }}
          >
            <CheckBoxOutlinedIcon fontSize="medium" color="primary" />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              placeholderOnClick();
            }}
          >
            <CheckBoxOutlineBlankOutlinedIcon
              fontSize="medium"
              color="primary"
            />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
};

export default MethodCard;
