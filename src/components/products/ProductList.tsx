import ProductItem from "./ProductItem";
import { productType } from "../../types/productType";
import { productListInterface } from "../../interfaces/productListInterface";
import { Grid, Box } from "@mui/material";

const ProductList = ({ data }: productListInterface) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 300px)", //the width of the card
        justifyContent: "center",
        gridGap: "20px",
        margin: "0 400px 0 400px",
      }}
    >
      {data.map((item: productType) => (
        <ProductItem props={item} />
      ))}
    </Box>
  );
};

export default ProductList;
