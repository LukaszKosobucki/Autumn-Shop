import axios from "axios";

export const requestCategories = async () => {
  const options = {
    url: "http://localhost:3000/categories",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const response = await axios(options);
  console.log("tutaj", response.data);
  return response.data;
};
