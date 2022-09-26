import axios from "axios";

export const requestData = async (loadSize: number) => {
  const options = {
    url: "http://localhost:3000/items",
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
  console.log("tutaj", response.data);
  return response.data;
};
