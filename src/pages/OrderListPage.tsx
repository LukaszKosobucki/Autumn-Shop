import { Grid, Button, Typography } from "@mui/material";
import OrderList from "../components/orders/OrderList";
import OrderImageBg from "../components/orders/OrderImageBg";
import { dataContext } from "../ContextProvider";
import { useContext } from "react";

const OrderListPage = () => {
  const { orderLoadLimit, setOrderLoadLimit, orderData } =
    useContext(dataContext);
  return (
    <Grid
      sx={{
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "100%",
      }}
    >
      <OrderImageBg />
      <Typography variant="h3" color="primary">
        --Order List--
      </Typography>
      {orderData.length > 0 ? (
        <OrderList />
      ) : (
        <Typography color="primary" variant="caption">
          There is no orders yet, please do a first order to see the history of
          orders
        </Typography>
      )}

      {orderData.length - orderLoadLimit > 0 && (
        <Button
          onClick={() => {
            setOrderLoadLimit(orderLoadLimit + 20);
          }}
          sx={{ my: 2 }}
        >
          <Typography variant="button" color="primary">
            Load More...
          </Typography>
        </Button>
      )}
    </Grid>
  );
};

export default OrderListPage;
