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
import { getCategories } from "../../service/getCategories";
import { categoryType } from "../../types/categoryType";
import { dataContext } from "../../ContextProvider";
import setFilterCategories from "../../utils/componentsFunctions/setFilterCategories";

const ProductFilter = () => {
  const [expand, setExpand] = useState<boolean>(false);
  const [categories, setCategories] = useState<categoryType[]>(
    [] as categoryType[]
  );
  const { filter, setFilter, setOrder, setSort, order, sort, processedData } =
    useContext(dataContext);
  const fetchData = async () => {
    const responseData = await getCategories();
    responseData && setCategories(responseData);
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
        p: "1rem",
        maxWidth: "37.5rem",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {categories.map((item: categoryType, index: number) => (
        <ToggleButtonGroup value={filter} key={item.categoryId}>
          <ToggleButton
            data-testid={item.categoryId}
            placeholder="buttonFilterCategory"
            onClick={() => {
              setFilter(setFilterCategories(item.categoryId, filter));
            }}
            value={item.categoryId}
          >
            <Typography color="primary" variant="button">
              {item.categoryName}
            </Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      ))}

      <IconButton
        placeholder="buttonSetExpand"
        onClick={() => setExpand(!expand)}
      >
        <FilterListIcon />
      </IconButton>
      {expand && (
        <>
          <IconButton
            placeholder="buttonSortByPrice"
            onClick={() => sortByPrice()}
          >
            <SortIcon />
          </IconButton>
          <IconButton
            placeholder="buttonSortByLetter"
            onClick={() => sortByLetter()}
          >
            <SortByAlphaIcon />
          </IconButton>
        </>
      )}
    </Grid>
  );
};

export default ProductFilter;
