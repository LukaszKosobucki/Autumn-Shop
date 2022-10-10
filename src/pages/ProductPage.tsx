import { useEffect, useContext } from "react";
import ProductList from "../components/products/ProductList";
import { productType } from "../types/productType";
import ProductFilter from "../components/products/ProductFilter";
import { Button, Box, Typography } from "@mui/material";
import { dataContext } from "../ContextProvider";
import ProductImageBg from "../components/products/ProductImageBg";

const ProductPage = () => {
  const {
    data,
    setLoadLimit,
    loadLimit,
    setFilter,
    filter,
    processedData,
    setProcessedData,
  } = useContext(dataContext);

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
    <Box sx={{ width: "100vw", p: 0 }}>
      <ProductImageBg />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flext-start",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <ProductFilter filterByCategory={setFilterCategories} />

        <ProductList items={processedData} />
        {processedData.length - loadLimit > 0 && (
          <Button
            onClick={() => {
              setLoadLimit(loadLimit + 9);
            }}
            sx={{ mt: 2 }}
          >
            <Typography variant="button" color="primary">
              Load More...
            </Typography>
          </Button>
        )}
      </Box>
    </Box>
  );
};

export { ProductPage, dataContext };
