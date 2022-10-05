import { productType } from "./productType";

export type basketProcessedType = productType & {
  quantity: number;
};
