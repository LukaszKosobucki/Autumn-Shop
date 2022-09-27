import ProductItem from "./ProductItem";
import { productType } from "../../types/productType";

import { Box } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { dataContext } from "../../pages/ProductPage";
import { basketType } from "../../types/basketType";
import { addProductToBasket } from "../../service/addProductToBasket";

const ProductList = () => {
  const [basketData, setBasketData] = useState<basketType[]>(
    [] as basketType[]
  );
  const postData = (data: basketType[]) => {
    addProductToBasket(data);
  };

  const addToBasket = (item: string) => {
    if (basketData.some((e) => e.id === item)) {
      const index = basketData.findIndex((e) => e.id === item);
      const newBasketData = basketData;
      newBasketData[index].quantity += 1;
      setBasketData([...newBasketData]);
    } else {
      setBasketData((basketData) => [...basketData, { id: item, quantity: 1 }]);
    }
  };

  // const delFromBasket = (item) => {
  //   setBasketData([item]);
  // };

  useEffect(() => {
    console.log(basketData);
  }, [basketData]);

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
      {items.map((item: productType) => (
        <ProductItem item={item} key={item.key} addToBasket={addToBasket} />
      ))}
    </Box>
  );
};

export default ProductList;
