import React, { createContext, useEffect, useState, useMemo } from "react";
import { requestData } from "./service/requestData";
import { basketType } from "./types/basketType";
import { productType } from "./types/productType";

export const dataContext = createContext<any>({});

const ContextProvider = ({ children, res }: any) => {
  const [load, setLoad] = useState<[boolean, number]>([true, 9]);
  const [data, setData] = useState<productType[]>([] as productType[]);
  const [basketData, setBasketData] = useState<basketType[]>(
    JSON.parse(localStorage.getItem("basketData") || "[]")
  );

  const [filter, setFilter] = useState<string[]>([]);

  const trueValues = useMemo(
    () => ({
      filter,
      setFilter,
      data,
      setData,
      setLoad,
      load,
      basketData,
      setBasketData,
      res,
    }),
    [
      filter,
      setFilter,
      data,
      setData,
      setLoad,
      load,
      basketData,
      setBasketData,
      res,
    ]
  );

  // const values = {};
  return (
    <dataContext.Provider value={trueValues}>{children}</dataContext.Provider>
  );
};
export default ContextProvider;
/**
 * zrób context provider dla danych i może dodaj do niego jakieś state'ty co by zrobić redux dla ubogich
 */
