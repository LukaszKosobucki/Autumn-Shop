import { Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { dataContext } from "../../ContextProvider";
import BasketItem from "./BasketItem";
import { mapBasketData } from "../../mappers/mapBasketData";
import { basketProcessedType } from "../../types/basketProcessedType";

const BasketList = () => {
  const { basketData, data, basketProcessedData, setBasketProcessedData } =
    useContext(dataContext);

  useEffect(() => {
    mapBasketData(data, basketData, setBasketProcessedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, basketData]);

  return (
    <Grid>
      {basketProcessedData.map((item: basketProcessedType) => {
        return <BasketItem key={item.key} item={item} />;
      })}
    </Grid>
  );
};
export default BasketList;
