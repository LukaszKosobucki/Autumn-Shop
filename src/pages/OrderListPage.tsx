import { Grid, Button, Typography } from "@mui/material";
import OrderList from "../components/orders/OrderList";
import OrderImageBg from "../components/orders/OrderImageBg";
import { dataContext } from "../ContextProvider";
import { useContext } from "react";
import { motion } from "framer-motion";
const OrderListPage = () => {
  const { orderLoadLimit, setOrderLoadLimit, orderData } =
    useContext(dataContext);
  return (
    <motion.div
      key="orderListPage"
      transition={{ delay: 0.3, duration: 0.3 }}
      style={{
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        padding: 0,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
            There is no orders yet, please do a first order to see the history
            of orders
          </Typography>
        )}

        {orderData.length - orderLoadLimit > 0 && (
          <Button
            data-testid="buttonLoadMore"
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
    </motion.div>
  );
};

export default OrderListPage;
