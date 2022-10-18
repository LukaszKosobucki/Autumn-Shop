import { productType } from "../../types/productType";

export const mockProductData: productType[] = [
  {
    name: "a",
    price: 15,
    category: "category1",
    id: "item_1",
    imgUrl: "url1",
  },
  {
    name: "c",
    price: 25,
    category: "category2",
    id: "item_2",
    imgUrl: "url2",
  },
  {
    name: "b",
    price: 20,
    category: "category3",
    id: "item_3",
    imgUrl: "url2",
  },
];
export const mockProductDataResult: productType[] = [
  {
    name: "a",
    price: 15,
    category: "category1",
    id: "item_1",
    imgUrl: "url1",
    key: "item_1",
  },

  {
    name: "c",
    price: 25,
    category: "category2",
    id: "item_2",
    imgUrl: "url2",
    key: "item_2",
  },
  {
    name: "b",
    price: 20,
    category: "category3",
    id: "item_3",
    imgUrl: "url2",
    key: "item_3",
  },
];
