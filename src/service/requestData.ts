import axios from "axios";
import { urls } from "./config";
import { mapData } from "../mappers/mapData";

export const requestData = async () => {
  const options = {
    url: urls.items,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const response = await axios(options).then((response) =>
    mapData(response.data)
  );

  return response;
};
