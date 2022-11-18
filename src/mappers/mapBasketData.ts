import { basketProcessedType } from "../types/basketProcessedType";
import { basketType } from "../types/basketType";
import { productType } from "../types/productType";

export const mapBasketData = (
  data: productType[],
  basketData: basketType[]
): basketProcessedType[] => {
  const items: basketProcessedType[] = [];

  data.map((item: productType) => {
    basketData.map((product: basketType) => {
      if (item.id === product.id) {
        items.push({ ...item, quantity: product.quantity, uid: product.uid });
      }
    });
  });
  return items;
};
