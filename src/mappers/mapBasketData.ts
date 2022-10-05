import { basketProcessedType } from "../types/basketProcessedType";
import { basketType } from "../types/basketType";
import { productType } from "../types/productType";
import React from "react";
export const mapBasketData = (
  data: productType[],
  basketData: basketType[],
  setBasketProcessedData: React.Dispatch<
    React.SetStateAction<basketProcessedType[]>
  >
): void => {
  const items: basketProcessedType[] = [];

  data.map((item: productType) => {
    basketData.map((product: basketType) => {
      if (item.id === product.id) {
        items.push({ ...item, quantity: product.quantity });
      }
    });
  });
  setBasketProcessedData(items);
};
