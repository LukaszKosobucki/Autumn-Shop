import { useEffect, useState } from "react";
import ProductList from "../components/products/ProductList";
import { productType } from "../types/productType";
import ProductFilter from "../components/products/ProductFilter";
import { fetchData } from "../service/fetchData";
import { Button } from "@mui/material";

const ProductPage = () => {
  const [data, setData] = useState<productType[]>([{}] as productType[]);
  const [load, setLoad] = useState<boolean>(true);
  const [filter, setFilter] = useState<boolean>(false);
  const [loadSize, setLoadSize] = useState<number>(9);
  const sortByLetter = (): void => {
    setData(data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    setFilter(true);
  };

  const sortByPrice = (): void => {
    setData(data.sort((a, b) => (a.price > b.price ? 1 : -1)));
    setFilter(true);
  };

  const filterByName = (): void => {
    setFilter(true);
  };

  const mapData = (loadedData: any): void => {
    const items: productType[] = [];
    for (
      let key = 0;
      key < (loadedData.length - loadSize >= 0 ? loadSize : loadedData.length);
      key++
    ) {
      items.push({ key: key, ...loadedData[key] });
    }
    setData(items);
  };

  useEffect(() => {
    if (load) {
      const fetcha = async () => {
        const responseData = await fetchData();
        mapData(responseData);
      };
      fetcha();
      setLoad(false);
    }
    setFilter(false);
  }, [load, filter]);

  return (
    <>
      <ProductFilter sortByLetter={sortByLetter} sortByPrice={sortByPrice} />
      <ProductList items={data} />
      <Button
        variant="contained"
        onClick={() => {
          setLoadSize(loadSize + 9);
          setLoad(true);
        }}
      >
        Load More...
      </Button>
    </>
  );
};

export default ProductPage;
