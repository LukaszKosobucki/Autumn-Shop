import ProductItem from "./ProductItem";
import { productType } from "../../types/productType";
const ProductList = ({ data }: any) => {
  console.log(typeof data);
  return (
    <ul>
      {data.map((item: productType) => (
        <ProductItem props={item} />
      ))}
    </ul>
  );
};

export default ProductList;
