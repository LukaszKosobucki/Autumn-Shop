import { Box, Typography } from "@mui/material";
import OrderList from "../components/orders/OrderList";
import OrderImageBg from "../components/orders/OrderImageBg";

const OrderListPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flext-start",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        minHeight: "100vh",
        color: "#3d405b",
        minWidth: "100%",
      }}
    >
      <OrderImageBg />
      <Typography variant="h3">--Order List--</Typography>
      <OrderList />
    </Box>
  );
};

export default OrderListPage;
