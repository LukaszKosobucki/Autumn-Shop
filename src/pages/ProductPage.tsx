import { useEffect, useState } from "react";
import ProductList from "../components/products/ProductList";
import axios from "axios";
import { productType } from "../types/productType";
import ProductFilter from "../components/products/ProductFilter";

const ProductPage = () => {
  const [data, setData] = useState<productType[]>([{}] as productType[]);
  const [getData, setGetData] = useState<boolean>(true);
  const options = {
    url: "http://localhost:3000/items?limit=9",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const sortByLetter = (): void => {
    setData(data.sort((a, b) => (a.name > b.name ? 1 : -1)));
  };

  const sortByPrice = (): void => {
    setData(data.sort((a, b) => (a.price > b.price ? 1 : -1)));
  };

  useEffect(() => {
    if (getData) {
      const items: productType[] = [];
      axios(options)
        .then((response) => {
          return response.data;
        })
        .then((rawData: productType[]) => {
          rawData.map((item: {}, index: number) => {
            items.push({ id: index, ...item } as productType);
            return items;
          });
          setData(items);
          setGetData(false);
        });
    }
  }, [data, getData]);

  return (
    <>
      <ProductFilter sortByLetter={sortByLetter} />
      <ProductList data={data} />
    </>
  );
};

export default ProductPage;
