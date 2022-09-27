import axios from "axios";
import { urls } from "./config";

export const addProductToBasket = async (data: any) => {
  const options = {
    url: urls.basket,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: data,
  };

  const response = await axios(options);
  return response.data;
};
