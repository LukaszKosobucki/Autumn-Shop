import { basketType } from "./basketType";
import { deliveryInformationType } from "./deliveryInformationType";

export type orderType = {
  order_id: number | string;
  items: basketType[];
  date: string;
  delivery_information: deliveryInformationType;
  delivery_option: string;
  payment_option: string;
};
