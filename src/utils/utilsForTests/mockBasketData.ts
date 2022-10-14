import { basketProcessedType } from "../../types/basketProcessedType";
import { basketType } from "../../types/basketType";

export const mockBasketData: basketType[] = [
  { id: "item_1", quantity: 4 },
  { id: "item_2", quantity: 5 },
  { id: "item_3", quantity: 1 },
];
export const mockBasketDataResult: basketType[] = [];
export const mockBasketProcessedData: basketProcessedType[] = [];
export const mockBasketProcessedDataResult: basketProcessedType[] = [
  {
    name: "product1",
    price: 15,
    category: "category1",
    id: "item_1",
    imgUrl: "url1",
    quantity: 4,
  },
  {
    name: "product2",
    price: 15,
    category: "category2",
    id: "item_2",
    imgUrl: "url2",
    quantity: 5,
  },
  {
    name: "product3",
    price: 15,
    category: "category3",
    id: "item_3",
    imgUrl: "url2",
    quantity: 1,
  },
];
