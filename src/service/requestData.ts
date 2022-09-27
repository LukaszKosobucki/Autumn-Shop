import axios from "axios";
import { urls } from "./config";

export const requestData = async (loadSize: number) => {
  const options = {
    url: urls.items,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    params: {
      _limit: loadSize,
    },
  };

  const response = await axios(options);
  return response.data;
};
