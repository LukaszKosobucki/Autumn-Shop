import { Grid, Box } from "@mui/material";
import MethodList from "../components/finalize/MethodList";
import BasketFinalizeBox from "../components/basket/BasketFinalizeBox";
import { dataContext } from "../ContextProvider";
import { useContext } from "react";
import FinalizeForm from "../components/finalize/FinalizeForm";
import { orderType } from "../types/orderType";
import { finalizeOptionsType } from "../types/finalizeOptionsType";
import { useForm, FormProvider } from "react-hook-form";
import { deliveryInformationType } from "../types/deliveryInformationType";
import { postOrder } from "../service/postOrder";
import { useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";

const FinalizePage = () => {
  const {
    deliveryOptions,
    paymentOptions,
    basketData,
    setBasketData,
    setOrderData,
    orderData,
  } = useContext(dataContext);
  const methods = useForm<FieldValues>();

  const navigate = useNavigate();

  const postDataFn = async (
    deliveryInformation: FieldValues
  ): Promise<void> => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const date = today.toLocaleDateString();
    const orderId: number = Math.floor(Date.now() + Math.random() * 1000);
    const deliveryOption = await deliveryOptions[
      deliveryOptions.findIndex((e: finalizeOptionsType) => e.selected === true)
    ].name;
    const paymentOption = await paymentOptions[
      paymentOptions.findIndex((e: finalizeOptionsType) => e.selected === true)
    ].name;

    const postData: orderType = {
      id: orderId,
      date: date,
      delivery_option: deliveryOption,
      payment_option: paymentOption,
      items: basketData,
      delivery_information: deliveryInformation as deliveryInformationType,
    };

    const res = await postOrder(postData);

    if (res === 201) {
      setBasketData([]);
      navigate("/", { replace: true });
      setOrderData([...orderData, postData]);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(postDataFn)}>
        <Grid
          sx={{
            flexDirection: "row",
            minHeight: "100vh",
            mt: "2.5rem",
          }}
        >
          <Box>
            <FinalizeForm />
            <MethodList options={deliveryOptions} />
            <MethodList options={paymentOptions} />
          </Box>
          <BasketFinalizeBox text="Finalize" link={false} />
        </Grid>
      </form>
    </FormProvider>
  );
};

export default FinalizePage;
