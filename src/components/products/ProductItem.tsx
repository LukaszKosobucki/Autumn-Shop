import { productType } from "../../types/productType";
const ProductItem = ({ props }: any) => {
  return (
    <li key={props.id}>
      <p>{props.name}</p>
      <p>{props.price}$</p>
      <p>{props.category}</p>
    </li>
  );
};

export default ProductItem;
