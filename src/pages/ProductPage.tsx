import { useEffect, useState, createContext } from "react";
import ProductList from "../components/products/ProductList";
import { productType } from "../types/productType";
import ProductFilter from "../components/products/ProductFilter";
import uniqueId from "lodash.uniqueid";
import { fetchData } from "../service/fetchData";
import { Button } from "@mui/material";

const dataContext = createContext<productType[]>([{}] as productType[]);

const ProductPage = () => {
  const [data, setData] = useState<productType[]>([{}] as productType[]);
  const [load, setLoad] = useState<[boolean, number]>([true, 9]);
  const [filter, setFilter] = useState<boolean>(false);

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
    loadedData.map((item: productType) =>
      items.push({ key: uniqueId("item_"), ...item })
    );

    setData(items);
  };

  useEffect(() => {
    if (load[0]) {
      const fetcha = async () => {
        const responseData = await fetchData(load[1]);
        mapData(responseData);
      };
      fetcha();
      setLoad([false, load[1]]);
    }
    setFilter(false);
  }, [load, filter]);

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
