import { productInterface } from "../../interfaces/productInterface";
const ProductItem = ({ props }: productInterface) => {
  return (
    <li key={props.id}>
      <p>{props.name}</p>
      <p>{props.price}$</p>
      <p>{props.category}</p>
    </li>
  );
};

export default ProductItem;
