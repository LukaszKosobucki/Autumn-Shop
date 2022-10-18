import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Slide,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useContext } from "react";
import { dataContext } from "../../ContextProvider";
import { orderType } from "../../types/orderType";
import { productType } from "../../types/productType";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OrderDetails = ({
  openDetails,
  handleClose,
  orderItem,
}: {
  openDetails: boolean;
  handleClose: () => void;
  orderItem: orderType;
}) => {
  const { data } = useContext(dataContext);

  return (
    <Dialog
      data-testid="modal"
      open={openDetails}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <Grid
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "37.5rem",
          minWidth: "31.25rem",
        }}
      >
        <DialogTitle>{orderItem.id}</DialogTitle>
        <IconButton
          onClick={handleClose}
          color="primary"
          data-testid="clickClose"
        >
          <CloseIcon />
        </IconButton>
      </Grid>

      <Grid
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "37.5rem",
          minWidth: "31.25rem",
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5">Delivery Credentials</Typography>
          {Object.entries(orderItem.delivery_information).map(
            ([key, value]) => (
              <DialogContentText
                data-testid="deliveryInfo"
                key={key}
              >{`${key}: ${value}`}</DialogContentText>
            )
          )}
        </DialogContent>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5">Items Orderder</Typography>
          {orderItem.items.map((item) => (
            <DialogContentText data-testid="orderInfoQuantity" key={item.id}>
              {data[data.findIndex((e: productType) => e.id === item.id)]?.name}
              , quantity: {item.quantity}
            </DialogContentText>
          ))}
        </DialogContent>
        <Typography>Date: {orderItem.date}</Typography>
        <Typography>Delivery Option: {orderItem.delivery_option}</Typography>
        <Typography>Payment Option: {orderItem.payment_option}</Typography>
      </Grid>
    </Dialog>
  );
};

export default OrderDetails;
