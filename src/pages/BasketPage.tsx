import { Box } from "@mui/material";
import BasketList from "../components/basket/BasketList";

const BasketPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flext-start",
        alignItems: "center",
        position: "relative",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <BasketList />
    </Box>
  );
};

export default BasketPage;
