import { basketType } from "../../types/basketType";
import { basketModalInterface } from "../../interfaces/basketModalInterface";

const addItemToBasket = (
  item: string,
  basketData: basketType[]
): basketModalInterface => {
  if (basketData.some((e: basketType) => e.id === item)) {
    const index = basketData.findIndex((e: basketType) => e.id === item);
    const newBasketData = basketData;
    newBasketData[index].quantity += 1;
    localStorage.setItem("basketData", JSON.stringify(basketData));
    return { basketData: [...newBasketData], isOpen: true };
  } else {
    localStorage.setItem("basketData", JSON.stringify(basketData));
    const newBasketData = basketData;
    newBasketData.push({ id: item, quantity: 1 });
    return {
      basketData: [...newBasketData],
      isOpen: true,
    };
  }
};

export default addItemToBasket;
