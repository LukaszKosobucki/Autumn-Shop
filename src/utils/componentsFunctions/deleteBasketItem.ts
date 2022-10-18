import { basketModalInterface } from "../../interfaces/basketModalInterface";
import { basketType } from "../../types/basketType";

const deleteBasketItem = (
  id: string,
  basketData: basketType[]
): basketModalInterface => {
  if (id && basketData.some((item) => id === item.id))
    return {
      isOpen: true,
      basketData: basketData.filter((item: basketType) => item.id !== id),
    };
  else
    return {
      isOpen: false,
      basketData: basketData,
    };
};

export default deleteBasketItem;
