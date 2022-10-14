import { basketProcessedType } from "../../types/basketProcessedType";

const addPricesOfBasketItems = (
  basketProcessedData: basketProcessedType[]
): number => {
  let prices: number = 0;
  basketProcessedData.forEach((item) => {
    prices += item.price * item.quantity;
  });
  return prices;
};
export default addPricesOfBasketItems;
