import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { json } from "stream/consumers";
import { dataContext } from "../../ContextProvider";
import { basketType } from "../../types/basketType";
import { productType } from "../../types/productType";
import BasketItem from "./BasketItem";

const BasketList = () => {
  const { basketData, data, setBasketData } = useContext(dataContext);
  const [basketProcessedData, setBasketProcessedData] = useState<any>([]);

  const mapData = (): void => {
    console.log(basketData);
    const items: any = [];
    data.map((item: productType) => {
      basketData.map((product: basketType) => {
        if (item.id === product.id) {
          items.push({ ...item, quantity: product.quantity });
        }
      });
    });
    setBasketProcessedData(items);
  };

  const reduceBasketItemQuant = (id: string) => {
    const index = basketData.findIndex((e: basketType) => e.id === id);
    if (basketData[index].quantity > 1) {
      const newBasketData = basketData;
      newBasketData[index].quantity -= 1;
      setBasketData([...newBasketData]);
    } else
      setBasketData(basketData.filter((item: basketType) => item.id !== id));
  };

  const increaseBasketItemQuant = (id: string) => {
    const index = basketData.findIndex((e: basketType) => e.id === id);
    const newBasketData = basketData;
    newBasketData[index].quantity += 1;
    setBasketData([...newBasketData]);
  };

  useEffect(() => {
    localStorage.setItem("basketData", JSON.stringify(basketData));
  }, [basketData]);

  useEffect(() => {
    mapData();
  }, [data, basketData]);

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
        return (
          <BasketItem
            key={item.key}
            item={item}
            reduceBasketItemQuant={reduceBasketItemQuant}
            increaseBasketItemQuant={increaseBasketItemQuant}
          />
        );
      })}
    </Box>
  );
};
export default BasketList;
