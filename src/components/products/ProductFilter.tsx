import { Box, Button, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import SortIcon from "@mui/icons-material/Sort";
const ProductFilter = ({ sortByLetter, sortByPrice }: any) => {
  const categories: string[] = [
    "Coffee",
    "Tea",
    "Coffee Accessories",
    "Tea Accessories",
    "Blankets",
    "Sweaters",
    "Books",
  ];

  const [expand, setExpand] = useState<boolean>(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        p: 2,
        marginLeft: 93,
        bgcolor: "background.paper",
        maxWidth: 500,
        borderRadius: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {categories.map((item: string, index: number) => (
        <Button key={index}>{item}</Button>
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
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ProductFilter;
