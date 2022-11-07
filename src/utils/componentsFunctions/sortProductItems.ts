import { productType } from "../../types/productType";

export const sortProductItems = (
  data: productType[],
  sort: string,
  order: boolean
) => {
  if (sort === "price") {
    order
      ? data.sort((a, b) => (a.price > b.price ? 1 : -1))
      : data.sort((a, b) => (a.price > b.price ? -1 : 1));
  } else if (sort === "letter") {
    order
      ? data.sort((a, b) => (a.name > b.name ? 1 : -1))
      : data.sort((a, b) => (a.name > b.name ? -1 : 1));
  }
};
