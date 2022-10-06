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
  const [order, setOrder] = useState<boolean>(
    JSON.parse(localStorage.getItem("order") || "false")
  );
  const [sort, setSort] = useState<string>(
    localStorage.getItem("sort") || "price"
  );

  const sortByLetter = (): void => {
    setOrder(!order);
    setSort("letter");
  };

  const sortByPrice = (): void => {
    setOrder(!order);
    setSort("price");
  };

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
    localStorage.setItem("sort", JSON.stringify(sort));
    if (sort === "price") {
      order
        ? setProcessedData(
            processedData.sort((a, b) => (a.price > b.price ? 1 : -1))
          )
        : setProcessedData(
            processedData.sort((a, b) => (a.price > b.price ? -1 : 1))
          );
    } else if (sort === "letter") {
      order
        ? setProcessedData(
            processedData.sort((a, b) => a.name.localeCompare(b.name))
          )
        : setProcessedData(
            processedData.sort((a, b) => b.name.localeCompare(a.name))
          );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, sort]);

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
      <ProductFilter
        sortByLetter={sortByLetter}
        sortByPrice={sortByPrice}
        filterByCategory={setFilterCategories}
      />

      <ProductList items={processedData} />
      {processedData.length - loadLimit > 0 && (
        <Button
          variant="contained"
          onClick={() => {
            setLoadLimit(loadLimit + 9);
          }}
          sx={{ mt: 1 }}
        >
          Load More...
        </Button>
      )}
    </Box>
  );
};

export { ProductPage, dataContext };
