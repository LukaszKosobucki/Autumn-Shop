import ProductItem from "./ProductItem";
import { productType } from "../../types/productType";

import { Box } from "@mui/material";
import { useContext } from "react";
import { dataContext } from "../../pages/ProductPage";
const ProductList = () => {
  const items = useContext(dataContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: 750,
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f7f4e1",
      }}
    >
      {items.map((item: productType) => (
        <ProductItem item={item} key={item.key} />
      ))}
    </Box>
  );
};

export default ProductList;
