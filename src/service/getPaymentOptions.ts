import axios from "axios";
import { urls } from "./config";
import { mapFinalizingOptions } from "../mappers/mapFinalizingOptions";

export const getPaymentOptions = async () => {
  const options = {
    url: urls.paymentOptions,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  const response = await axios(options)
    .then((response) => mapFinalizingOptions(response.data))
    .catch((err) => console.log(err));

  return response;
};
