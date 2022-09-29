import { useEffect, useState, useContext } from "react";
import ProductList from "../components/products/ProductList";
import { productType } from "../types/productType";
import ProductFilter from "../components/products/ProductFilter";
import { Button, Box } from "@mui/material";
import { dataContext } from "../ContextProvider";
import { requestData } from "../service/requestData";

const ProductPage = () => {
  const { res, setLoad, load, setFilter, filter } = useContext(dataContext);
  const [processedData, setProcessedData] = useState<productType[]>(res);
  const [order, setOrder] = useState<boolean>(false);

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
      setFilter(filter.filter((item: string) => item !== category));
    } else setFilter((filter: string[]) => [...filter, category]);
  };

  const filterByCategories = (): void => {
    setProcessedData(
      filter.length > 0
        ? res.filter((item: any) => filter.includes(item.category))
        : res
    );
  };

  useEffect(() => {
    filterByCategories();
  }, [res, order, filter]);

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
