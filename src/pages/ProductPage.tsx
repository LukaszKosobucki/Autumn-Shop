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
  const [filter, setFilter] = useState<string>("");
  const [isHighlighted, setIsHighlighted] = useState<boolean>(true);

  const sortByLetter = (): void => {
    setOrder(!order);
    order
      ? setProcessedData(
          processedData.sort((a, b) => (a.name > b.name ? 1 : -1))
        )
      : setProcessedData(
          processedData.sort((a, b) => (a.name > b.name ? -1 : 1))
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

  const filterByCategory = (name: string): void => {
    setFilter(name);
    setIsHighlighted(!isHighlighted);
    isHighlighted
      ? setProcessedData(data.filter((item) => item.category === name))
      : setProcessedData(data);
  };

  const mapData = (loadedData: any): void => {
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
        filterByCategory={filterByCategory}
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
