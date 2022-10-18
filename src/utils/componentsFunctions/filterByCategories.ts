import { productType } from "../../types/productType";

const filterByCategories = (
  filter: string[],
  data: productType[]
): productType[] => {
  return filter.length > 0
    ? data.filter((item: productType) => filter.includes(item.category))
    : data;
};

export default filterByCategories;
