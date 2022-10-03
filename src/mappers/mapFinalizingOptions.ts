import { finalizeOptionsType } from "../types/finalizeOptionsType";

export const mapFinalizingOptions = (
  loadedData: finalizeOptionsType[]
): finalizeOptionsType[] => {
  const items: finalizeOptionsType[] = [];
  loadedData.map((item: finalizeOptionsType) =>
    items.push({ key: item.name, ...item })
  );
  console.log(items);
  return items;
};
