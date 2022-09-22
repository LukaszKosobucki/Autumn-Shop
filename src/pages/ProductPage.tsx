import { useState } from "react";
import ProductList from "../components/products/ProductList";

const ProductPage = () => {
  const [data, setData] = useState(["xd"]);
  return <ProductList data={data} />;
};

export default ProductPage;
