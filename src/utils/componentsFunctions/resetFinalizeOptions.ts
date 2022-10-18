import { finalizeOptionsType } from "../../types/finalizeOptionsType";

const resetFinalizeOptions = (
  deliveryOptions: finalizeOptionsType[],
  paymentOptions: finalizeOptionsType[],
  options: finalizeOptionsType[]
): {
  paymentOptions: finalizeOptionsType[];
  deliveryOptions: finalizeOptionsType[];
} => {
  if (
    deliveryOptions.some((e: finalizeOptionsType) => e.name === options[0].name)
  ) {
    const index = deliveryOptions.findIndex(
      (e: finalizeOptionsType) => e.selected === true
    );
    const newDeliveryOptions = deliveryOptions;
    newDeliveryOptions[index].selected = !deliveryOptions[index].selected;
    return {
      deliveryOptions: [...newDeliveryOptions],
      paymentOptions: paymentOptions,
    };
  } else {
    const index = paymentOptions.findIndex(
      (e: finalizeOptionsType) => e.selected === true
    );
    const newPaymentOptions = paymentOptions;
    newPaymentOptions[index].selected = !paymentOptions[index].selected;
    return {
      deliveryOptions: deliveryOptions,
      paymentOptions: [...newPaymentOptions],
    };
  }
};

export default resetFinalizeOptions;
