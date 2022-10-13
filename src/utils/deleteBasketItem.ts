import { basketType } from "../types/basketType";

const deleteBasketItem = (
  id: string,
  basketData: basketType[]
): { basketData: basketType[]; isOpen: boolean } => {
  if (id && basketData.map((item) => id in item))
    return {
      isOpen: true,
      basketData: basketData.filter((item: basketType) => item.id !== id),
    };
  return {
    isOpen: false,
    basketData: basketData,
  };
};

export default deleteBasketItem;
