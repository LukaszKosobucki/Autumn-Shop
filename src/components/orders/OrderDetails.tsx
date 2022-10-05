import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Slide,
  Typography,
  Box,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useContext } from "react";
import { dataContext } from "../../ContextProvider";
import { basketType } from "../../types/basketType";
import { orderType } from "../../types/orderType";
import { productType } from "../../types/productType";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
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
      open={openDetails}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>{orderItem.order_id}</DialogTitle>
      <Box
        sx={{
          display: "flex",
          flexWrap: " wrap",
          color: "#3d405b",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: 600,
          minWidth: 500,
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
            <DialogContentText key={item.id}>
              {data[data.findIndex((e: productType) => e.id === item.id)].name},
              quantity: {item.quantity}
            </DialogContentText>
          ))}
        </DialogContent>
        <Typography>Date: {orderItem.date}</Typography>
        <Typography>Delivery Option: {orderItem.delivery_option}</Typography>
        <Typography>Payment Option: {orderItem.payment_option}</Typography>
      </Box>
    </Dialog>
  );
};

export default OrderDetails;
