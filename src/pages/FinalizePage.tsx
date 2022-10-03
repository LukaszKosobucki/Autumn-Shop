import FinalizeForm from "../components/finalize/FinalizeForm";
import { Box } from "@mui/material";
import MethodList from "../components/finalize/MethodList";
import BasketFinalizeBox from "../components/basket/BasketFinalizeBox";
import { dataContext } from "../ContextProvider";
import { useContext, useEffect } from "react";

const FinalizePage = () => {
  const { deliveryOptions, paymentOptions } = useContext(dataContext);

  return (
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
        <FinalizeForm />
        <MethodList options={deliveryOptions} />
        <MethodList options={paymentOptions} />
      </Box>
      <BasketFinalizeBox text="Finalize" link={false} />
    </Box>
  );
};

export default FinalizePage;
