import { useEffect, useState, createContext } from "react";
import ProductList from "../components/products/ProductList";
import { productType } from "../types/productType";
import ProductFilter from "../components/products/ProductFilter";
import uniqueId from "lodash.uniqueid";
import { requestData } from "../service/requestData";
import { Button, Box } from "@mui/material";

const dataContext = createContext<productType[]>([] as productType[]);

const ProductPage = () => {
  const [data, setData] = useState<productType[]>([] as productType[]);
  const [processedData, setProcessedData] = useState<productType[]>(
    [] as productType[]
  );
  const [load, setLoad] = useState<[boolean, number]>([true, 9]);
  const [order, setOrder] = useState<boolean>(false);
  const [filter, setFilter] = useState<string[]>([]);
  const [isHighlighted, setIsHighlighted] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const sortByLetter = (): void => {
    setOrder(!order);
    order
      ? setProcessedData(
          processedData.sort((a, b) => a.name.localeCompare(b.name))
        )
      : setProcessedData(
          processedData.sort((a, b) => b.name.localeCompare(a.name))
        );
  };

  const sortByPrice = (): void => {
    setOrder(!order);
    order
      ? setProcessedData(
          processedData.sort((a, b) => (a.price > b.price ? 1 : -1))
        )
      : setProcessedData(
          processedData.sort((a, b) => (a.price > b.price ? -1 : 1))
        );
  };

  const setFilterCategories = (name: string, index: number): void => {
    setIsHighlighted(
      isHighlighted.map((item: boolean, idx: number) =>
        idx === index ? !item : item
      )
    );
    isHighlighted[index]
      ? setFilter(filter.filter((category) => category !== name))
      : setFilter((filter) => [...filter, name]);
  };

  const filterByCategory = (): void => {
    setProcessedData(
      filter.length > 0
        ? data.filter((item) => filter.includes(item.category))
        : data
    );
  };

  const mapData = (loadedData: productType[]): void => {
    const items: productType[] = [];
    loadedData.map((item: productType) =>
      items.push({ key: item.id, ...item })
    );
    setData(items);
    setProcessedData(items);
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
    filterByCategory();
  }, [load, order, filter]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flext-start",
        alignItems: "center",
        position: "relative",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <ProductFilter
        sortByLetter={sortByLetter}
        sortByPrice={sortByPrice}
        filterByCategory={setFilterCategories}
      />
      <dataContext.Provider value={processedData}>
        <ProductList />
      </dataContext.Provider>

      <Button
        variant="contained"
        onClick={() => {
          setLoad([true, load[1] + 9]);
        }}
        sx={{ mt: 1 }}
      >
        Load More...
      </Button>
    </Box>
  );
};

export { ProductPage, dataContext };
