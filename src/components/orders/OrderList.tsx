import OrderItem from "./OrderItem";
import { Grid } from "@mui/material";
import { dataContext } from "../../ContextProvider";
import { useContext } from "react";
import { orderType } from "../../types/orderType";

const OrderList = () => {
  const { orderData, orderLoadLimit } = useContext(dataContext);
  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flext-start",
        alignItems: "flex-start",
        flexDirection: "column",
        my: 3,
      }}
    >
      {orderData.slice(0, orderLoadLimit).map((orderItem: orderType) => (
        <OrderItem key={orderItem.id} orderItem={orderItem} />
      ))}
    </Grid>
  );
};

export default OrderList;
