import { createContext, useEffect, useState, useMemo } from "react";
import { mapBasketData } from "./mappers/mapBasketData";
import { getDeliveryOptions } from "./service/getDeliveryOptions";
import { getOrderData } from "./service/getOrderData";
import { getPaymentOptions } from "./service/getPaymentOptions";
import { requestData } from "./service/requestData";
import { basketType } from "./types/basketType";
import { finalizeOptionsType } from "./types/finalizeOptionsType";
import { orderType } from "./types/orderType";
import { productType } from "./types/productType";
import { childrenInterface } from "./interfaces/childrenInterface";
import { basketProcessedType } from "./types/basketProcessedType";
import { contextProviderInterface } from "./interfaces/contextProviderInterface";

export const dataContext = createContext<contextProviderInterface>(
  {} as contextProviderInterface
);

const ContextProvider = ({ children }: childrenInterface) => {
  const [basketData, setBasketData] = useState<basketType[]>(
    JSON.parse(localStorage.getItem("basketData") || "[]")
  );
  const [filter, setFilter] = useState<string[]>([]);
  const [data, setData] = useState<productType[]>([]);
  const [loadLimit, setLoadLimit] = useState<number>(9);
  const [orderLoadLimit, setOrderLoadLimit] = useState<number>(20);
  const [basketProcessedData, setBasketProcessedData] = useState<
    basketProcessedType[]
  >([]);
  const [processedData, setProcessedData] = useState<productType[]>(data);

  const [deliveryOptions, setDeliveryOptions] = useState<finalizeOptionsType[]>(
    []
  );
  const [paymentOptions, setPaymentOptions] = useState<finalizeOptionsType[]>(
    []
  );
  const [open, setOpen] = useState<boolean>(false);
  const [orderData, setOrderData] = useState<orderType[]>([]);
  const [order, setOrder] = useState<boolean>(
    JSON.parse(localStorage.getItem("order") || "false")
  );
  const [sort, setSort] = useState<string>(
    localStorage.getItem("sort") || "price"
  );

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await requestData();
      setData(responseData);
      const responseDelivery = await getDeliveryOptions();
      setDeliveryOptions(responseDelivery);
      const responsePayment = await getPaymentOptions();
      setPaymentOptions(responsePayment);
      const responseOrderData = await getOrderData();
      setOrderData(responseOrderData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("basketData", JSON.stringify(basketData));
  }, [basketData]);

  useEffect(() => {
    mapBasketData(data, basketData, setBasketProcessedData);

    if (sort === "price") {
      console.log(order);
      order
        ? data.sort((a, b) => (a.price > b.price ? 1 : -1))
        : data.sort((a, b) => (a.price > b.price ? -1 : 1));
    } else if (sort === "letter") {
      console.log(order);
      order
        ? data.sort((a, b) => (a.name > b.name ? 1 : -1))
        : data.sort((a, b) => (a.name > b.name ? -1 : 1));
    }
    setProcessedData(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const trueValues = useMemo(
    () => ({
      filter,
      setFilter,
      basketData,
      setBasketData,
      data,
      loadLimit,
      setLoadLimit,
      basketProcessedData,
      setBasketProcessedData,
      deliveryOptions,
      setDeliveryOptions,
      paymentOptions,
      setPaymentOptions,
      open,
      setOpen,
      orderData,
      setOrderData,
      order,
      setOrder,
      sort,
      setSort,
      processedData,
      setProcessedData,
      orderLoadLimit,
      setOrderLoadLimit,
    }),
    [
      filter,
      setFilter,
      basketData,
      setBasketData,
      data,
      loadLimit,
      setLoadLimit,
      basketProcessedData,
      setBasketProcessedData,
      deliveryOptions,
      setDeliveryOptions,
      paymentOptions,
      setPaymentOptions,
      open,
      setOpen,
      orderData,
      setOrderData,
      order,
      setOrder,
      sort,
      setSort,
      processedData,
      setProcessedData,
      orderLoadLimit,
      setOrderLoadLimit,
    ]
  );

  // const values = {};
  return (
    <dataContext.Provider value={trueValues}>{children}</dataContext.Provider>
  );
};
export default ContextProvider;
