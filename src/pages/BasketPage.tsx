import { Box, Typography } from "@mui/material";
import BasketList from "../components/basket/BasketList";
import BasketFinalizeBox from "../components/basket/BasketFinalizeBox";
import { dataContext } from "../ContextProvider";
import { useContext } from "react";

const BasketPage = () => {
  const { basketData } = useContext(dataContext);
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
        mt: 5,
      }}
    >
      {basketData.length > 0 ? (
        <>
          <BasketList />
          <BasketFinalizeBox text="Next" link={true} />
        </>
      ) : (
        <Typography>
          The Basket is empty, go to the main page and add some items to proceed
          further
        </Typography>
      )}
    </Box>
  );
};

export default BasketPage;
