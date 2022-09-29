import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../ContextProvider";
import { basketType } from "../../types/basketType";
import { productType } from "../../types/productType";
import BasketItem from "./BasketItem";

const BasketList = () => {
  const { basketData, res } = useContext(dataContext);
  const [basketProcessedData, setBasketProcessedData] = useState<any>([]);

  const mapData = (): void => {
    const items: any = [];
    console.log(res);
    res.map((item: productType) => {
      basketData.map((product: basketType) => {
        if (item.id === product.id) {
          items.push({ ...item, quantity: product.quantity });
        }
      });
    });
    setBasketProcessedData(items);
  };

  useEffect(() => {
    mapData();

    console.log("???", res);
  }, [res]);

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
