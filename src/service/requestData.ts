import axios from "axios";
import { productType } from "../types/productType";
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

  const mapData = (loadedData: productType[]): productType[] => {
    const items: productType[] = [];
    loadedData.map((item: productType) =>
      items.push({ key: item.id, ...item })
    );
    return items;
  };
  const response = await axios(options).then((response) =>
    mapData(response.data)
  );

  return response;
};
