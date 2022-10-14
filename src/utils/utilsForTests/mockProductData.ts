import { productType } from "../../types/productType";

export const mockProductData: productType[] = [
  {
    name: "product1",
    price: 15,
    category: "category1",
    id: "item_1",
    imgUrl: "url1",
  },
  {
    name: "product2",
    price: 15,
    category: "category2",
    id: "item_2",
    imgUrl: "url2",
  },
  {
    name: "product3",
    price: 15,
    category: "category3",
    id: "item_3",
    imgUrl: "url2",
  },
];
export const mockProductDataResult: productType[] = [
  {
    name: "product1",
    price: 15,
    category: "category1",
    id: "item_1",
    imgUrl: "url1",
    key: "item_1",
  },

  {
    name: "product2",
    price: 15,
    category: "category2",
    id: "item_2",
    imgUrl: "url2",
    key: "item_2",
  },
  {
    name: "product3",
    price: 15,
    category: "category3",
    id: "item_3",
    imgUrl: "url2",
    key: "item_3",
  },
];
