import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../ContextProvider";
import { basketType } from "../../types/basketType";
import { productType } from "../../types/productType";
import BasketItem from "./BasketItem";

const BasketList = () => {
  const [basketProcessedData, setBasketProcessedData] = useState<any>([]);
  const { basketData, data } = useContext(dataContext);

  const mapData = (): void => {
    const items: any = [];
    data.map((item: productType) => {
      basketData.map((product: basketType) => {
        if (item.id === product.id) {
          items.push({ ...item, quantity: product.quantity });
          console.log(items);
        }
      });
    });
    setBasketProcessedData(items);
  };

  useEffect(() => {
    mapData();
  }, [basketData]);

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
      {basketProcessedData.map((item: any) => {
        return <BasketItem key={item.key} item={item} />;
      })}
    </Box>
  );
};
export default BasketList;
