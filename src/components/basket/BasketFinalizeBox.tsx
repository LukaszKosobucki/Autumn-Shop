import { Box, Typography, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../ContextProvider";
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
        alignItems: "center",
        flexDirection: "column",
        position: "sticky",
        top: 50,
        ml: 5,
        p: 5,
        bgcolor: "#e0ddcb",
        borderRadius: "3%",
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
      <Button>
        <Typography sx={{ fontSize: 14 }} color="#3d405b" gutterBottom>
          Finalize
        </Typography>
      </Button>
    </Box>
  );
};

export default BasketFinalizeBox;
