import FinalizeForm from "../components/finalize/FinalizeForm";
import { Box } from "@mui/material";
import MethodList from "../components/finalize/MethodList";
import BasketFinalizeBox from "../components/basket/BasketFinalizeBox";
import { dataContext } from "../ContextProvider";
import { useContext } from "react";

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
      <BasketFinalizeBox />
    </Box>
  );
};

export default FinalizePage;
