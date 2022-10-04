import { basketType } from "./basketType";

export type orderType = {
  order_id: number;
  items: basketType[];
  date: string;
  delivery_information: {
    name: string;
    surname: string;
    email: string;
    phone: string;
    state: string;
    zipcode: string;
    city: string;
  };
  delivery_option: string;
  payment_option: string;
};
