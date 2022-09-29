import { Box } from "@mui/material";
import BasketList from "../components/basket/BasketList";
import BasketFinalizeBox from "../components/basket/BasketFinalizeBox";

const BasketPage = () => {
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
      <BasketList />
      <BasketFinalizeBox />
    </Box>
  );
};

export default BasketPage;
