import { Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { dataContext } from "../../ContextProvider";
import { basketType } from "../../types/basketType";
import BasketItem from "./BasketItem";
import { mapBasketData } from "../../mappers/mapBasketData";
import { basketProcessedType } from "../../types/basketProcessedType";

const BasketList = () => {
  const {
    basketData,
    data,
    setBasketData,
    basketProcessedData,
    setBasketProcessedData,
    setOpen,
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
    setOpen(true);
  };

  useEffect(() => {
    mapBasketData(data, basketData, setBasketProcessedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, basketData]);

  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flext-start",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      {basketProcessedData.map((item: basketProcessedType) => {
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
    </Grid>
  );
};
export default BasketList;
