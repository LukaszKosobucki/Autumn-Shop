import { Grid, Typography } from "@mui/material";
import BasketList from "../components/basket/BasketList";
import BasketFinalizeBox from "../components/basket/BasketFinalizeBox";
import { dataContext } from "../ContextProvider";
import { useContext } from "react";

const BasketPage = () => {
  const { basketData } = useContext(dataContext);
  return (
    <Grid
      sx={{
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
    </Grid>
  );
};

export default BasketPage;
