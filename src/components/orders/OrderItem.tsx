import { Box, Link } from "@mui/material";
import { orderType } from "../../types/orderType";

const OrderItem = ({ orderItem }: { orderItem: orderType }) => {
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
      <Box sx={{ borderRight: "1px solid black", px: 1, py: 0.5, my: 0.5 }}>
        <Link>{orderItem.order_id}</Link>{" "}
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
