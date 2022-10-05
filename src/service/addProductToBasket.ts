import axios from "axios";
import { basketType } from "../types/basketType";
import { urls } from "./config";

export const addProductToBasket = async (data: basketType[]) => {
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
