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
import { methodCardInterface } from "../../interfaces/methodCardInterface";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import colors from "../../palette.module.scss";
import changeFinalizeOptions from "../../utils/componentsFunctions/changeFinalizeOptions";

const MethodCard = ({ name, imgUrl, selected }: methodCardInterface) => {
  const {
    deliveryOptions,
    setDeliveryOptions,
    paymentOptions,
    setPaymentOptions,
  } = useContext(dataContext);

  return (
    <Card
      data-testid="methodCard"
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
            placeholder="buttonDelivery"
            onClick={() => {
              const placeholder = changeFinalizeOptions(
                deliveryOptions,
                paymentOptions,
                name
              );
              setDeliveryOptions(placeholder.deliveryOptions);
              setPaymentOptions(placeholder.paymentOptions);
            }}
          >
            <CheckBoxOutlinedIcon fontSize="medium" color="primary" />
          </IconButton>
        ) : (
          <IconButton
            placeholder="buttonPayment"
            onClick={() => {
              const placeholder = changeFinalizeOptions(
                deliveryOptions,
                paymentOptions,
                name
              );
              setDeliveryOptions(placeholder.deliveryOptions);
              setPaymentOptions(placeholder.paymentOptions);
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
