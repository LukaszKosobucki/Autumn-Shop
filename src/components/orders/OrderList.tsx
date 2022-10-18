import OrderItem from "./OrderItem";
import { Grid } from "@mui/material";
import { dataContext } from "../../ContextProvider";
import { useContext, useState } from "react";
import { orderType } from "../../types/orderType";
import OrderDetails from "./OrderDetails";
import { mockOrderData } from "../../utils/utilsForTests/mockOrderData";

const OrderList = () => {
  const { orderData, orderLoadLimit } = useContext(dataContext);
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [orderItem, setOrderItem] = useState<orderType>(mockOrderData);
  const handleOpen = (orderItem: orderType): void => {
    setOpenDetails(true);
    setOrderItem(orderItem);
  };
  const handleClose = (): void => {
    setOpenDetails(false);
  };
  return (
    <Grid sx={{ my: "1.5rem" }}>
      {orderData.slice(0, orderLoadLimit).map((orderItem: orderType) => (
        <OrderItem
          key={orderItem.id}
          orderItem={orderItem}
          handleOpen={handleOpen}
        />
      ))}
      <OrderDetails
        orderItem={orderItem}
        handleClose={handleClose}
        openDetails={openDetails}
      />
    </Grid>
  );
};

export default OrderList;
