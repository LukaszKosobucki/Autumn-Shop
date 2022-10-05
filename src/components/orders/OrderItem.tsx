import { Box, Link } from "@mui/material";
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
      <Box
        sx={{
          borderRight: "1px solid black",
          px: 1,
          py: 0.5,
          my: 0.5,
        }}
      >
        <Link onClick={() => handleOpen()} sx={{ cursor: "pointer" }}>
          {orderItem.order_id}
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
      <Box sx={{ borderLeft: "1px solid black", px: 1, py: 0.5, my: 0.5 }}>
        {orderItem.date}
      </Box>
    </Box>
  );
};

export default OrderItem;
