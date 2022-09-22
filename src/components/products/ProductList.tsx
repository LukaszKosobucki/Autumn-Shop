import ProductItem from "./ProductItem";
import { productType } from "../../types/productType";
import { productListInterface } from "../../interfaces/productListInterface";
const ProductList = ({ data }: productListInterface) => {
  return (
    <ul>
      {data.map((item: productType) => (
        <ProductItem props={item} />
      ))}
    </ul>
  );
};

export default ProductList;
