import { basketType } from "../types/basketType";
import { productType } from "../types/productType";

export const mapBasketData = (
  data: productType[],
  basketData: basketType[],
  setBasketProcessedData: any
): void => {
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
