import ProductItem from "./ProductItem";
import { productType } from "../../types/productType";
import { productListInterface } from "../../interfaces/productListInterface";
import { Box } from "@mui/material";
const ProductList = ({ data }: productListInterface) => {
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
      {data.map((item: productType) => (
        <ProductItem props={item} />
      ))}
    </Box>
  );
};

export default ProductList;
