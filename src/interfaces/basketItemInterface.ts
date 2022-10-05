import { basketProcessedType } from "../types/basketProcessedType";

export interface basketItemInterface {
  item: basketProcessedType;
  reduceBasketItemQuant: (arg: string) => void;
  increaseBasketItemQuant: (arg: string) => void;
  deleteBasketItem: (arg: string) => void;
}
