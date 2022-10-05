import axios from "axios";
import { orderType } from "../types/orderType";
import { urls } from "./config";

export const postOrder = async (data: orderType) => {
  const options = {
    url: urls.order_list,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: data,
  };

  axios(options)
    .then((response) => console.log(response.status))
    .catch((e) => console.log(e.response.data));
};
