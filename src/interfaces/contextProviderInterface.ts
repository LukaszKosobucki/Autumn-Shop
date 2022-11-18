import { basketProcessedType } from "../types/basketProcessedType";
import { basketType } from "../types/basketType";
import { finalizeOptionsType } from "../types/finalizeOptionsType";
import { orderType } from "../types/orderType";
import { productType } from "../types/productType";
import React from "react";
import { Firestore } from "firebase/firestore";
import { Auth, User } from "firebase/auth";
import { IuserCreds } from "./IuserCreds";
import { isLogged } from "../types/isLoggedType";

export interface contextProviderInterface {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  basketData: basketType[];
  setBasketData: React.Dispatch<React.SetStateAction<basketType[]>>;
  data: productType[];
  loadLimit: number;
  setLoadLimit: React.Dispatch<React.SetStateAction<number>>;
  basketProcessedData: basketProcessedType[];
  setBasketProcessedData: React.Dispatch<
    React.SetStateAction<basketProcessedType[]>
  >;
  deliveryOptions: finalizeOptionsType[];
  setDeliveryOptions: React.Dispatch<
    React.SetStateAction<finalizeOptionsType[]>
  >;
  paymentOptions: finalizeOptionsType[];
  setPaymentOptions: React.Dispatch<
    React.SetStateAction<finalizeOptionsType[]>
  >;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  orderData: orderType[];
  setOrderData: React.Dispatch<React.SetStateAction<orderType[]>>;
  order: boolean;
  setOrder: React.Dispatch<React.SetStateAction<boolean>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  processedData: productType[];
  setProcessedData: React.Dispatch<React.SetStateAction<productType[]>>;
  orderLoadLimit: number;
  setOrderLoadLimit: React.Dispatch<React.SetStateAction<number>>;
  firestore: Firestore;
  auth: Auth;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  userCredentials: IuserCreds;
  setUserCredentials: React.Dispatch<React.SetStateAction<IuserCreds>>;
  isLogged: isLogged;
  setIsLogged: React.Dispatch<React.SetStateAction<isLogged>>;
  initBasketData: basketType[];
}
