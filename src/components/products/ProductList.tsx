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
        p: 2,
        marginLeft: 75,
        bgcolor: "background.paper",
        maxWidth: 750,
        borderRadius: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {items.map((item: productType, index: number) => (
        <ProductItem item={item} key={index} />
      ))}
    </Box>
  );
};

export default ProductList;
