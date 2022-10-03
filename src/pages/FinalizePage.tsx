import FinalizeForm from "../components/finalize/FinalizeForm";
import { Box } from "@mui/material";
import MethodList from "../components/finalize/MethodList";
import BasketFinalizeBox from "../components/basket/BasketFinalizeBox";

const FinalizePage = () => {
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
        <MethodList list={[{ name: "dhl" }, { name: "dhl2" }]} />
        <MethodList list={[{ name: "dhl" }, { name: "dhl2" }]} />
      </Box>
      <BasketFinalizeBox />
    </Box>
  );
};

export default FinalizePage;
