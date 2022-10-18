import { Grid, Link, Box } from "@mui/material";
import { orderType } from "../../types/orderType";

const OrderItem = ({
  orderItem,
  handleOpen,
}: {
  orderItem: orderType;
  handleOpen: (arg: orderType) => void;
}) => {
  return (
    <Grid
      data-testid="orderItem"
      sx={{
        color: "#3d405b",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "37.5rem",
        minWidth: "31.25rem",
      }}
    >
      <Box
        sx={{
          borderRight: "1px solid black",
          px: "0.5rem",
          py: "0.25rem",
          my: "0.25rem",
        }}
      >
        <Link
          placeholder="buttonLink"
          onClick={() => handleOpen(orderItem)}
          sx={{ cursor: "pointer" }}
        >
          {orderItem.id}
        </Link>
      </Box>
      <Box>
        {orderItem.payment_option} / {orderItem.delivery_option}
      </Box>
      <Box
        sx={{
          borderLeft: "1px solid black",
          px: "0.5rem",
          py: "0.25rem",
          my: "0.25rem",
        }}
      >
        {orderItem.date}
      </Box>
    </Grid>
  );
};

export default OrderItem;
