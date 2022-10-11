import OrderItem from "./OrderItem";
import { Grid } from "@mui/material";
import { dataContext } from "../../ContextProvider";
import { useContext } from "react";
import { orderType } from "../../types/orderType";

const OrderList = () => {
  const { orderData, orderLoadLimit } = useContext(dataContext);
  return (
    <Grid sx={{ my: "1.5rem" }}>
      {orderData.slice(0, orderLoadLimit).map((orderItem: orderType) => (
        <OrderItem key={orderItem.id} orderItem={orderItem} />
      ))}
    </Grid>
  );
};

export default OrderList;
