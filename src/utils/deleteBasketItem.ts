import { basketType } from "../types/basketType";

const deleteBasketItem = (
  id: string,
  basketData: basketType[]
): { setbasketdata: basketType[]; setopen: boolean } => {
  return {
    setopen: true,
    setbasketdata: basketData.filter((item: basketType) => item.id !== id),
  };
};

export default deleteBasketItem;
