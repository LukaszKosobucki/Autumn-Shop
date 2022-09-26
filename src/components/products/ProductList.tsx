import ProductItem from "./ProductItem";
import { productType } from "../../types/productType";
import { productListInterface } from "../../interfaces/productListInterface";
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
      {items.map((item: productType, index: number) => (
        <ProductItem item={item} key={index} />
      ))}
    </Box>
  );
};

export default ProductList;
