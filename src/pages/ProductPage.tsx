import { useEffect, useState } from "react";
import ProductList from "../components/products/ProductList";
import axios from "axios";

const ProductPage = () => {
  const [data, setData] = useState(["product"] as string[]);

  const options = {
    url: "http://localhost:3000/items/",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  useEffect(() => {
    axios(options).then((response) => console.log(response.data[1]));
  }, []);

  return <ProductList />;
};

export default ProductPage;
