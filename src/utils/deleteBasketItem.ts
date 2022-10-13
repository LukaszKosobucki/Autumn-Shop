import { basketType } from "../types/basketType";

const deleteBasketItem = (
  id: string,
  basketData: basketType[]
): { setbasketdata: basketType[]; setopen: boolean } => {
  if (id && basketData.map((item) => id in item))
    return {
      setopen: true,
      setbasketdata: basketData.filter((item: basketType) => item.id !== id),
    };
  return {
    setopen: false,
    setbasketdata: basketData,
  };
};

export default deleteBasketItem;
