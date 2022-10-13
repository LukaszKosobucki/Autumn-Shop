import { basketProcessedType } from "../../types/basketProcessedType";
import { basketType } from "../../types/basketType";

export const mockBasketData: basketType[] = [
  {
    id: "item1",
    quantity: 2,
  },
  {
    id: "item2",
    quantity: 3,
  },
];
export const mockBasketDataResult: basketType[] = [];
export const mockBasketProcessedData: basketProcessedType[] = [];
export const mockBasketProcessedDataResult: basketProcessedType[] = [
  {
    name: "product1",
    price: 15,
    category: "category1",
    id: "item1",
    imgUrl: "url1",
    quantity: 2,
  },
  {
    name: "product2",
    price: 15,
    category: "category2",
    id: "item2",
    imgUrl: "url2",
    quantity: 3,
  },
];
