import { finalizeOptionsType } from "../../types/finalizeOptionsType";

const changeFinalizeOptions = (
  deliveryOptions: finalizeOptionsType[],
  paymentOptions: finalizeOptionsType[],
  name: string
): {
  paymentOptions: finalizeOptionsType[];
  deliveryOptions: finalizeOptionsType[];
} => {
  if (deliveryOptions.some((e: finalizeOptionsType) => e.name === name)) {
    const index = deliveryOptions.findIndex(
      (e: finalizeOptionsType) => e.name === name
    );
    const newDeliveryOptions = deliveryOptions;
    newDeliveryOptions[index].selected = !deliveryOptions[index].selected;
    return {
      deliveryOptions: [...newDeliveryOptions],
      paymentOptions: paymentOptions,
    };
  } else {
    const index = paymentOptions.findIndex(
      (e: finalizeOptionsType) => e.name === name
    );
    const newPaymentOptions = paymentOptions;
    newPaymentOptions[index].selected = !paymentOptions[index].selected;
    return {
      deliveryOptions: deliveryOptions,
      paymentOptions: [...newPaymentOptions],
    };
  }
};
export default changeFinalizeOptions;
