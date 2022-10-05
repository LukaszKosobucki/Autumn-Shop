import { Box } from "@mui/material";
import MethodList from "../components/finalize/MethodList";
import BasketFinalizeBox from "../components/basket/BasketFinalizeBox";
import { dataContext } from "../ContextProvider";
import { useContext } from "react";
import FinalizeForm from "../components/finalize/FinalizeForm";
import { orderType } from "../types/orderType";
import { uniqueId } from "lodash";
import { finalizeOptionsType } from "../types/finalizeOptionsType";
import { useForm } from "react-hook-form";
import { deliveryInformationType } from "../types/deliveryInformationType";
import { postOrder } from "../service/postOrder";

const FinalizePage = () => {
  const { deliveryOptions, paymentOptions, basketData } =
    useContext(dataContext);
  const { register, handleSubmit } = useForm<deliveryInformationType>();

  const postDataFn = async (
    deliveryInformation: deliveryInformationType
  ): Promise<void> => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const date = await today.toLocaleDateString();
    const orderId = 1;
    const deliveryOption = await deliveryOptions[
      deliveryOptions.findIndex((e: finalizeOptionsType) => e.selected === true)
    ].name;
    const paymentOption = await paymentOptions[
      paymentOptions.findIndex((e: finalizeOptionsType) => e.selected === true)
    ].name;

    const postData: orderType = await {
      date: date,
      order_id: orderId,
      delivery_option: deliveryOption,
      payment_option: paymentOption,
      items: basketData,
      delivery_information: deliveryInformation,
    };

    console.log(postData);
    postOrder(postData);
  };

  return (
    <form onSubmit={handleSubmit(postDataFn)}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flext-start",
          alignItems: "flex-start",
          position: "relative",
          flexDirection: "row",
          minHeight: "100vh",
        }}
      >
        <Box>
          <FinalizeForm register={register} />
          <MethodList options={deliveryOptions} />
          <MethodList options={paymentOptions} />
        </Box>
        <BasketFinalizeBox text="Finalize" link={false} />
      </Box>
    </form>
  );
};

export default FinalizePage;
