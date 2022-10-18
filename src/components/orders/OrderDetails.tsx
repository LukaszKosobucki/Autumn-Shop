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
import styles from "../../palette.module.scss";

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
      scroll="body"
      onClose={handleClose}
    >
      <Grid
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "37.5rem",
          minWidth: "31.25rem",
          backgroundColor: styles.colorAutumnLight100,
        }}
      >
        <DialogTitle color="primary" variant="h4">
          {orderItem.id}
        </DialogTitle>
        <Typography color="primary" variant="h4">
          {orderItem.date}
        </Typography>
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
          justifyContent: "space-evenly",
          backgroundColor: styles.colorAutumnLight100,
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
          <Typography variant="h5" color="primary">
            Delivery Information
          </Typography>
          {Object.entries(orderItem.delivery_information).map(
            ([key, value]) => (
              <DialogContentText
                data-testid="deliveryInfo"
                key={key}
                color="primary"
                variant="caption"
              >{`${key}: ${value}`}</DialogContentText>
            )
          )}
          <Typography color="primary" variant="caption">
            Delivery Option: {orderItem.delivery_option}
          </Typography>
          <Typography color="primary" variant="caption">
            Payment Option: {orderItem.payment_option}
          </Typography>
        </DialogContent>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            mr: "3rem",
          }}
        >
          <Typography variant="h5" color="primary">
            Items Orderder
          </Typography>
          {orderItem.items.map((item) => (
            <DialogContentText data-testid="orderInfoQuantity" key={item.id}>
              <Typography color="primary" variant="caption">
                {
                  data[data.findIndex((e: productType) => e.id === item.id)]
                    ?.name
                }
                , x{item.quantity}
              </Typography>
            </DialogContentText>
          ))}
        </DialogContent>
      </Grid>
    </Dialog>
  );
};

export default OrderDetails;
