import { useEffect, useState, createContext } from "react";
import ProductList from "../components/products/ProductList";
import { productType } from "../types/productType";
import ProductFilter from "../components/products/ProductFilter";
import uniqueId from "lodash.uniqueid";
import { requestData } from "../service/requestData";
import { Button } from "@mui/material";

const dataContext = createContext<productType[]>([{}] as productType[]);

const ProductPage = () => {
  const [data, setData] = useState<productType[]>([{}] as productType[]);
  const [load, setLoad] = useState<[boolean, number]>([true, 9]);
  const [sort, setSort] = useState<string>("");
  const [isSortRise, setIsSortRise] = useState<boolean>(false);

  const sortByLetter = (): void => {
    setSort("name");
    setLoad([true, load[1]]);
  };

  const sortByPrice = (): void => {
    setSort("price");
    setLoad([true, load[1]]);
  };

  const filterByName = (): void => {
    setSort("name");
    setLoad([true, load[1]]);
  };

  const mapData = (loadedData: any): void => {
    const items: productType[] = [];
    loadedData.map((item: productType) =>
      items.push({ key: uniqueId("item_"), ...item })
    );
    setData(items);
  };

  const fetchData = async () => {
    const responseData = await requestData(load[1], sort);
    mapData(responseData);
    setLoad([false, load[1]]);
  };

  useEffect(() => {
    if (load[0]) {
      fetchData();
    }
  }, [load]);

  return (
    <>
      <ProductFilter sortByLetter={sortByLetter} sortByPrice={sortByPrice} />
      <dataContext.Provider value={data}>
        <ProductList />
      </dataContext.Provider>

      <Button
        variant="contained"
        onClick={() => {
          setLoad([true, load[1] + 9]);
        }}
      >
        Load More...
      </Button>
    </>
  );
};

export { ProductPage, dataContext };
