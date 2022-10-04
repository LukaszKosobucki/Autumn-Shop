import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { orderType } from "../../types/orderType";

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
  return (
    <Dialog
      open={openDetails}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>{orderItem.order_id}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {orderItem.items.toString()}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetails;
