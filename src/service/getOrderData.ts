import axios from "axios";
import { urls } from "./config";

export const getOrderData = async () => {
  const options = {
    url: urls.order_list,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  const response = await axios(options)
    .then((response) => response.data)
    .catch((err) => console.log(err));

  return response;
};
