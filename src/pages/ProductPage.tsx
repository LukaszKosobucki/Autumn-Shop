import { useEffect, useContext } from "react";
import ProductList from "../components/products/ProductList";
import ProductFilter from "../components/products/ProductFilter";
import { Button, Grid, Box, Typography } from "@mui/material";
import { dataContext } from "../ContextProvider";
import ProductImageBg from "../components/products/ProductImageBg";
import filterByCategories from "../utils/componentsFunctions/filterByCategories";

const ProductPage = () => {
  const {
    data,
    setLoadLimit,
    loadLimit,
    filter,
    processedData,
    setProcessedData,
  } = useContext(dataContext);

  useEffect(() => {
    setProcessedData(filterByCategories(filter, data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, filter]);

  return (
    <Box sx={{ width: "100vw", p: 0 }}>
      <ProductImageBg />
      <Grid
        sx={{
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <ProductFilter />

        <ProductList items={processedData} />
        {processedData.length - loadLimit > 0 && (
          <Button
            data-testid="buttonLoadMore"
            onClick={() => {
              setLoadLimit(loadLimit + 9);
            }}
            sx={{ my: 2 }}
          >
            <Typography variant="button" color="primary">
              Load More...
            </Typography>
          </Button>
        )}
      </Grid>
    </Box>
  );
};

export { ProductPage, dataContext };
