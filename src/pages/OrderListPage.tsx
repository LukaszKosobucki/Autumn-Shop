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
      <Typography variant="h3" color="primary">
        --Order List--
      </Typography>
      <OrderList />
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
