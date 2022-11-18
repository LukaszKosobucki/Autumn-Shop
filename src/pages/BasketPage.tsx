import { Grid, Typography } from "@mui/material";
import BasketList from "../components/basket/BasketList";
import BasketFinalizeBox from "../components/basket/BasketFinalizeBox";
import { dataContext } from "../ContextProvider";
import { useContext } from "react";
import { motion } from "framer-motion";

const BasketPage = () => {
  const { basketData } = useContext(dataContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Grid
        sx={{
          flexDirection: "row",
          minHeight: "100vh",
          mt: "2.5rem",
        }}
      >
        {basketData.length > 0 ? (
          <>
            <BasketList />
            <BasketFinalizeBox text="Next" link={true} />
          </>
        ) : (
          <Typography>
            The Basket is empty, go to the main page and add some items to
            proceed further
          </Typography>
        )}
      </Grid>
    </motion.div>
  );
};

export default BasketPage;
