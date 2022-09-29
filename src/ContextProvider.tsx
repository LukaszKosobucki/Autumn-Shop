import React, { createContext, useEffect, useState, useMemo } from "react";
import { requestData } from "./service/requestData";
import { basketType } from "./types/basketType";
import { productType } from "./types/productType";

export const dataContext = createContext<any>({});

const ContextProvider = ({ children }: any) => {
  const [basketData, setBasketData] = useState<basketType[]>(
    JSON.parse(localStorage.getItem("basketData") || "[]")
  );

  const [filter, setFilter] = useState<string[]>([]);
  const [data, setData] = useState<productType[]>([]);
  const [load, setLoad] = useState<number>(9);
  useEffect(() => {
    const fetchData = async () => {
      const responseData = await requestData(load);
      setData(responseData);
    };
    fetchData();
  }, [load]);

  const trueValues = useMemo(
    () => ({
      filter,
      setFilter,
      setLoad,
      load,
      basketData,
      setBasketData,
      data,
    }),
    [filter, setFilter, setLoad, load, basketData, setBasketData, data]
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
