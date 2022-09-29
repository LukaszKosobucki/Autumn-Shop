import { Box, Typography, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../ContextProvider";
import { Link } from "react-router-dom";

const BasketFinalizeBox = () => {
  const { basketProcessedData } = useContext(dataContext);
  const [price, setPrice] = useState<number>(0);

  const addPricesOfBasketItems = () => {
    let prices: number = 0;
    basketProcessedData.forEach((item: any) => {
      prices += item.price * item.quantity;
    });
    setPrice(prices);
  };

  useEffect(() => {
    addPricesOfBasketItems();
  }, [basketProcessedData]);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: " wrap",
        color: "#3d405b",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        position: "sticky",
        top: 90,
        ml: 5,
        p: 4,
        bgcolor: "#e0ddcb",
        borderRadius: "5%",
      }}
    >
      <Typography sx={{ fontSize: 14 }} color="#3d405b" gutterBottom>
        Products Price: {price}$
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="#3d405b" gutterBottom>
        Delivery Price: {20}$
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="#3d405b" gutterBottom>
        Total Price: {price + 20}$
      </Typography>
      <Button
        component={Link}
        to="/finalize"
        sx={{ bgcolor: "#f4f1de", pb: 0, borderRadius: "0%" }}
      >
        <Typography sx={{ fontSize: 14 }} color="#3d405b" gutterBottom>
          Finalize
        </Typography>
      </Button>
    </Box>
  );
};

export default BasketFinalizeBox;
