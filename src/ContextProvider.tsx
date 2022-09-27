import React, { createContext, useState } from "react";

export const dataContext = createContext({});

const ContextProvider = ({ children }: any) => {
  const [data, setData] = useState<any>([]);
  const values = [data];
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
};
export default ContextProvider;
/**
 * zrób content provider dla danych i może dodaj do niego jakieś state'ty co by zrobić redux dla ubogich
 */
