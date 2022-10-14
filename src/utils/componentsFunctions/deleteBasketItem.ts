import { basketModalInterface } from "../../interfaces/basketModalInterface";
import { basketType } from "../../types/basketType";

const deleteBasketItem = (
  id: string,
  basketData: basketType[]
): basketModalInterface => {
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
