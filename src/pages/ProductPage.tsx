import { useEffect, useState, useContext } from "react";
import ProductList from "../components/products/ProductList";
import { productType } from "../types/productType";
import ProductFilter from "../components/products/ProductFilter";
import { Button, Box } from "@mui/material";
import { dataContext } from "../ContextProvider";

const ProductPage = () => {
  const { data, setLoadLimit, loadLimit, setFilter, filter } =
    useContext(dataContext);
  const [processedData, setProcessedData] = useState<productType[]>(data);

  const setFilterCategories = (category: string): void => {
    if (filter.includes(category)) {
      setFilter(filter.filter((item: string) => item !== category));
    } else setFilter((filter: string[]) => [...filter, category]);
  };

  const filterByCategories = (): void => {
    setProcessedData(
      filter.length > 0
        ? data.filter((item: productType) => filter.includes(item.category))
        : data
    );
  };

  useEffect(() => {
    filterByCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, filter]);

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
      <ProductFilter filterByCategory={setFilterCategories} />

      <ProductList items={processedData} />
      {processedData.length - loadLimit > 0 ? (
        <Button
          variant="contained"
          onClick={() => {
            setLoadLimit(loadLimit + 9);
          }}
          sx={{ mt: 1 }}
        >
          Load More...
        </Button>
      ) : null}
    </Box>
  );
};

export { ProductPage, dataContext };
