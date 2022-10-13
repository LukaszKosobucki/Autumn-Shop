import { productType } from "../../types/productType";

export const mockProductData: productType[] = [
  {
    name: "product1",
    price: 15,
    category: "category1",
    id: "item1",
    imgUrl: "url1",
  },
  {
    name: "product2",
    price: 15,
    category: "category2",
    id: "item2",
    imgUrl: "url2",
  },
];
export const mockProductDataResult: productType[] = [
  {
    name: "product1",
    price: 15,
    category: "category1",
    id: "item1",
    imgUrl: "url1",
    key: "item1",
  },

  {
    name: "product2",
    price: 15,
    category: "category2",
    id: "item2",
    imgUrl: "url2",
    key: "item2",
  },
];
