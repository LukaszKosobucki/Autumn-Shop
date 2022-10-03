import { productType } from "../types/productType";

export const mapData = (loadedData: productType[]): productType[] => {
  const items: productType[] = [];
  loadedData.map((item: productType) => items.push({ key: item.id, ...item }));
  return items;
};
