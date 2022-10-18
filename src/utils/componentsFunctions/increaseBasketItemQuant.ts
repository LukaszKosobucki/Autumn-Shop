import { basketType } from "../../types/basketType";

const increaseBasketItemQuant = (
  id: string,
  basketData: basketType[]
): { basketData: basketType[] } => {
  const index = basketData.findIndex((e: basketType) => e.id === id);
  const newBasketData: basketType[] = basketData;
  newBasketData[index].quantity += 1;
  return { basketData: [...newBasketData] };
};

export default increaseBasketItemQuant;
