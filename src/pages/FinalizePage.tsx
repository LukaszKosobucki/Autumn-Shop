import FinalizeForm from "../components/finalize/FinalizeForm";
import { Box } from "@mui/material";
import MethodCard from "../components/finalize/MethodCard";
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
        <MethodCard />
        <MethodCard />
      </Box>
      <BasketFinalizeBox />
    </Box>
  );
};

export default FinalizePage;
