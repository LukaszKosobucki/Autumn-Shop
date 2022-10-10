import { productType } from "../types/productType";

export interface productItemInterface {
  item: productType;
  addToBasket: (item: string) => void;
}
