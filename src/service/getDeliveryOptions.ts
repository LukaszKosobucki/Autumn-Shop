import axios from "axios";
import { urls } from "./config";
import { mapFinalizingOptions } from "../mappers/mapFinalizingOptions";

export const getDeliveryOptions = async () => {
  const options = {
    url: urls.deliveryOptions,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  const response = await axios(options).then((response) =>
    mapFinalizingOptions(response.data)
  );

  return response;
};
