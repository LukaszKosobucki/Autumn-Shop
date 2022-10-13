import { basketType } from "../types/basketType";

const reduceBasketItemQuant = (
  id: string,
  basketData: basketType[]
): { basketData: basketType[] } => {
  const index = basketData.findIndex((e: basketType) => e.id === id);
  if (basketData[index].quantity > 1) {
    const newBasketData = basketData;
    newBasketData[index].quantity -= 1;
    return { basketData: [...newBasketData] };
  } else
    return {
      basketData: basketData.filter((item: basketType) => item.id !== id),
    };
};

export default reduceBasketItemQuant;
