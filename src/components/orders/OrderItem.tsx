import { Grid, Link, Box } from "@mui/material";
import { useState } from "react";
import { orderType } from "../../types/orderType";
import OrderDetails from "./OrderDetails";

const OrderItem = ({ orderItem }: { orderItem: orderType }) => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const handleOpen = (): void => {
    setOpenDetails(true);
  };
  const handleClose = (): void => {
    setOpenDetails(false);
  };
  return (
    <Grid
      sx={{
        color: "#3d405b",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "37.5rem",
        minWidth: "31.25rem",
      }}
    >
      <Box
        sx={{
          borderRight: "1px solid black",
          px: "0.5rem",
          py: "0.25rem",
          my: "0.25rem",
        }}
      >
        <Link onClick={() => handleOpen()} sx={{ cursor: "pointer" }}>
          {orderItem.id}
        </Link>
        <OrderDetails
          orderItem={orderItem}
          handleClose={handleClose}
          openDetails={openDetails}
        />
      </Box>
      <Box>
        {orderItem.payment_option} / {orderItem.delivery_option}
      </Box>
      <Box
        sx={{
          borderLeft: "1px solid black",
          px: "0.5rem",
          py: "0.25rem",
          my: "0.25rem",
        }}
      >
        {orderItem.date}
      </Box>
    </Grid>
  );
};

export default OrderItem;
