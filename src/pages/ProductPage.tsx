import { useEffect, useState } from "react";
import ProductList from "../components/products/ProductList";
import axios from "axios";
import { productType } from "../types/productType";

const ProductPage = () => {
  const [data, setData] = useState([{}]);

  const options = {
    url: "http://localhost:3000/items/",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  useEffect(() => {
    const items: productType[] = [];
    axios(options)
      .then((response) => {
        return response.data;
      })
      .then((data: productType[]) => {
        data.map((item: {}, index: number) => {
          items.push({ id: index, ...item } as productType);
        });
        setData(data);
      });
  }, []);

  return <ProductList data={data} />;
};

export default ProductPage;
