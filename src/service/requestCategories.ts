import axios from "axios";
import { urls } from "./config";

export const requestCategories = async () => {
  const options = {
    url: urls.categories,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const response = await axios(options);
  return response.data;
};
