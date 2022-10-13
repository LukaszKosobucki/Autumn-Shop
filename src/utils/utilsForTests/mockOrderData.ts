import { deliveryInformationType } from "../../types/deliveryInformationType";
import { orderType } from "../../types/orderType";
import { mockBasketData } from "./mockBasketData";

export const mockDeliveryInformation: deliveryInformationType = {
  name: "asdfasd",
  surname: "sdafas",
  email: "asdf@asdfjha.com",
  phone: "48325235235",
  zipcode: "23-325",
  state: "afdas",
  city: "asdfas",
};

export const mockOrderData: orderType[] = [
  {
    id: 1234,
    items: mockBasketData,
    date: "1/1/2022",
    delivery_information: mockDeliveryInformation,
    delivery_option: "DHL",
    payment_option: "cash",
  },
  {
    id: 1235,
    items: mockBasketData,
    date: "1/1/2022",
    delivery_information: mockDeliveryInformation,
    delivery_option: "DHL",
    payment_option: "cash",
  },
];
