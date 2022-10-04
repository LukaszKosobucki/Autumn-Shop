import OrderItem from "./OrderItem";
import { Box } from "@mui/material";
import { dataContext } from "../../ContextProvider";
import { useContext } from "react";
import { orderType } from "../../types/orderType";

const OrderList = () => {
  const { orderData } = useContext(dataContext);
  const placeholderList = ["item1", "item2"];
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flext-start",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      {orderData.map((orderItem: orderType) => (
        <OrderItem key={orderItem.order_id} orderItem={orderItem} />
      ))}
    </Box>
  );
};

export default OrderList;
