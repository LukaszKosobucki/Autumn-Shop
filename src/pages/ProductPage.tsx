import { useEffect, useState, useContext } from "react";
import ProductList from "../components/products/ProductList";
import { productType } from "../types/productType";
import ProductFilter from "../components/products/ProductFilter";
import { Button, Box } from "@mui/material";
import { dataContext } from "../ContextProvider";
import { requestData } from "../service/requestData";

const ProductPage = () => {
  const { data, setData, setLoad, load } = useContext(dataContext);
  const [processedData, setProcessedData] = useState<productType[]>(data);
  const [order, setOrder] = useState<boolean>(false);
  const [filter, setFilter] = useState<string[]>([]);

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

  const setFilterCategories = (category: string): void => {
    if (filter.includes(category)) {
      setFilter(filter.filter((item) => item !== category));
    } else setFilter((filter) => [...filter, category]);
  };

  const filterByCategories = (): void => {
    setProcessedData(
      filter.length > 0
        ? data.filter((item: any) => filter.includes(item.category))
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
    filterByCategories();
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

      <ProductList items={processedData} />

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
