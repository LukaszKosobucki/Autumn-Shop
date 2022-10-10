import {
  Grid,
  ToggleButton,
  IconButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState, useEffect, useContext } from "react";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import SortIcon from "@mui/icons-material/Sort";
import { requestCategories } from "../../service/requestCategories";
import { categoryType } from "../../types/categoryType";
import { dataContext } from "../../ContextProvider";
import { productFilterInterface } from "../../interfaces/productFilterInterface";

const ProductFilter = ({ filterByCategory }: productFilterInterface) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [categories, setCategories] = useState<categoryType[]>(
    [] as categoryType[]
  );
  const { filter, setOrder, setSort, order, sort, processedData } =
    useContext(dataContext);
  const fetchData = async () => {
    const responseData = await requestCategories();
    setCategories(responseData);
  };

  const sortByLetter = (): void => {
    setOrder(!order);
    setSort("letter");
    order
      ? processedData.sort((a, b) => (a.name > b.name ? -1 : 1))
      : processedData.sort((a, b) => (a.name > b.name ? 1 : -1));
  };

  const sortByPrice = (): void => {
    setOrder(!order);
    setSort("price");
    order
      ? processedData.sort((a, b) => b.price - a.price)
      : processedData.sort((a, b) => a.price - b.price);
  };

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  useEffect(() => {
    localStorage.setItem("sort", sort);
  }, [sort]);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Grid
      sx={{
        p: 2,
        maxWidth: 500,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        bgcolor: "#f7f4e1",
      }}
    >
      {categories.map((item: categoryType, index: number) => (
        <ToggleButtonGroup value={filter} key={item.categoryId}>
          <ToggleButton
            onClick={() => {
              filterByCategory(item.categoryId);
            }}
            value={item.categoryId}
          >
            <Typography color="primary" variant="button">
              {item.categoryName}
            </Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      ))}

      <IconButton onClick={() => setExpand(!expand)}>
        <FilterListIcon />
      </IconButton>
      {expand ? (
        <>
          <IconButton onClick={() => sortByPrice()}>
            <SortIcon />
          </IconButton>
          <IconButton onClick={() => sortByLetter()}>
            <SortByAlphaIcon />
          </IconButton>
        </>
      ) : null}
    </Grid>
  );
};

export default ProductFilter;
