import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../ContextProvider";
import { basketType } from "../../types/basketType";
import BasketItem from "./BasketItem";
import { mapBasketData } from "../../mappers/mapBasketData";

const BasketList = () => {
  const {
    basketData,
    data,
    setBasketData,
    basketProcessedData,
    setBasketProcessedData,
  } = useContext(dataContext);

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

  const deleteBasketItem = (id: string) => {
    setBasketData(basketData.filter((item: basketType) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("basketData", JSON.stringify(basketData));
  }, [basketData]);

  useEffect(() => {
    mapBasketData(data, basketData, setBasketProcessedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            deleteBasketItem={deleteBasketItem}
          />
        );
      })}
    </Box>
  );
};
export default BasketList;
