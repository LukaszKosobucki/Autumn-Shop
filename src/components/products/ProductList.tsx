import ProductItem from "./ProductItem";
import { productType } from "../../types/productType";
import { Grid } from "@mui/material";
import { useContext } from "react";
import { dataContext } from "../../ContextProvider";

const ProductList = ({ items }: { items: productType[] }) => {
  const { loadLimit } = useContext(dataContext);

  return (
    <Grid
      sx={{
        maxWidth: "47rem",
        alignItems: "center",
        flexDirection: "row",
        mb: "2rem",
      }}
    >
      {items.slice(0, loadLimit).map((item: productType) => (
        <ProductItem item={item} key={item.key} />
      ))}
    </Grid>
  );
};

export default ProductList;
