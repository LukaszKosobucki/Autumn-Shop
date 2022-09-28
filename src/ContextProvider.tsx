import React, { createContext, useState } from "react";
import { basketType } from "./types/basketType";
import { productType } from "./types/productType";

export const dataContext = createContext<any>({});

const ContextProvider = ({ children }: any) => {
  const [load, setLoad] = useState<[boolean, number]>([true, 9]);
  const [data, setData] = useState<productType[]>([] as productType[]);
  const [basketData, setBasketData] = useState<basketType[]>(
    [] as basketType[]
  );

  const values = { data, setData, setLoad, load, basketData, setBasketData };
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
};
export default ContextProvider;
/**
 * zrób context provider dla danych i może dodaj do niego jakieś state'ty co by zrobić redux dla ubogich
 */
