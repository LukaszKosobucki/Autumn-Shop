import {
  mockBasketData,
  mockBasketProcessedDataResult,
} from "./mockBasketData";
import { mockProductData, mockProductDataResult } from "./mockProductData";
import { mockFinalizeData } from "./mockFinalizeData";
import { mockOrderDataArray } from "./mockOrderData";
import { contextProviderInterface } from "../../interfaces/contextProviderInterface";
import { Firestore } from "firebase/firestore";
import { NULL } from "sass";
import { Auth } from "firebase/auth";

export const mockContext: contextProviderInterface = {
  filter: [],
  setFilter: jest.fn(),
  basketData: mockBasketData,
  setBasketData: jest.fn(),
  data: mockProductData,
  loadLimit: 9,
  setLoadLimit: jest.fn(),
  basketProcessedData: mockBasketProcessedDataResult,
  setBasketProcessedData: jest.fn(),
  deliveryOptions: mockFinalizeData,
  setDeliveryOptions: jest.fn(),
  paymentOptions: mockFinalizeData,
  setPaymentOptions: jest.fn(),
  open: false,
  setOpen: jest.fn(),
  orderData: mockOrderDataArray,
  setOrderData: jest.fn(),
  order: false,
  setOrder: jest.fn(),
  sort: "letter",
  setSort: jest.fn(),
  processedData: mockProductDataResult,
  setProcessedData: jest.fn(),
  orderLoadLimit: 20,
  setOrderLoadLimit: jest.fn(),
  firestore: {} as Firestore,
  auth: {} as Auth,
  user: null,
  setUser: jest.fn(),
};
