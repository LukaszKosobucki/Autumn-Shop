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
  const [order, setOrder] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  const sortByLetter = (): void => {
    setOrder(!order);
    order
      ? setData(data.sort((a, b) => (a.name > b.name ? 1 : -1)))
      : setData(data.sort((a, b) => (a.name > b.name ? -1 : 1)));
  };

  const sortByPrice = (): void => {
    setOrder(!order);
    order
      ? setData(data.sort((a, b) => (a.price > b.price ? 1 : -1)))
      : setData(data.sort((a, b) => (a.price > b.price ? -1 : 1)));
  };

  const filterByName = (): void => {
    setData(data.filter((item) => item.category === filter));
  };

  const mapData = (loadedData: any): void => {
    const items: productType[] = [];
    loadedData.map((item: productType) =>
      items.push({ key: uniqueId("item_"), ...item })
    );
    setData(items);
  };

  const fetchData = async () => {
    const responseData = await requestData(load[1]);
    mapData(responseData);
    setLoad([false, load[1]]);
  };

  useEffect(() => {
    if (load[0]) {
      fetchData();
    }
    if (filter !== "") {
      filterByName();
    }
  }, [load, order, filter]);

  return (
    <>
      <ProductFilter
        sortByLetter={sortByLetter}
        sortByPrice={sortByPrice}
        setFilter={setFilter}
      />
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
