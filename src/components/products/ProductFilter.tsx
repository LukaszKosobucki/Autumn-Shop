import { Box, Button, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState, useEffect } from "react";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import SortIcon from "@mui/icons-material/Sort";
import { requestCategories } from "../../service/requestCategories";
import { categoryType } from "../../types/categoryType";

const ProductFilter = ({
  sortByLetter,
  sortByPrice,
  filterByCategory,
}: any) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [categories, setCategories] = useState<categoryType[]>(
    [] as categoryType[]
  );

  const fetchData = async () => {
    const responseData = await requestCategories();
    setCategories(responseData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        p: 2,
        maxWidth: 500,
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f7f4e1",
      }}
    >
      {categories.map((item: categoryType, index: number) => (
        <Button
          onClick={() => {
            filterByCategory(item.categoryId);
          }}
          key={item.categoryId}
        >
          {item.categoryName}
        </Button>
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
    </Box>
  );
};

export default ProductFilter;
