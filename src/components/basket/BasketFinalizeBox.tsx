import { Grid, Typography, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../ContextProvider";
import { Link } from "react-router-dom";
import { basketProcessedType } from "../../types/basketProcessedType";
import styles from "../../palette.module.scss";

const BasketFinalizeBox = ({ text, link }: { text: string; link: boolean }) => {
  const { basketProcessedData } = useContext(dataContext);
  const [price, setPrice] = useState<number>(0);

  const addPricesOfBasketItems = () => {
    let prices: number = 0;
    basketProcessedData.forEach((item: basketProcessedType) => {
      prices += item.price * item.quantity;
    });
    setPrice(prices);
  };

  useEffect(() => {
    addPricesOfBasketItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basketProcessedData]);
  return (
    <Grid
      sx={{
        position: "sticky",
        top: 90,
        ml: "2.5rem",
        p: "1.5rem",
        bgcolor: styles.colorAutumnLight100,
        borderRadius: "1rem",
      }}
    >
      <Typography color="primary" variant="caption">
        Products Price: {price}$
      </Typography>
      <Typography color="primary" variant="caption">
        Delivery Price: {20}$
      </Typography>
      <Typography color="primary" variant="caption">
        Total Price: {price + 20}$
      </Typography>
      {link ? (
        <Button component={Link} to="/finalize">
          <Typography color="primary" variant="caption">
            {text}
          </Typography>
        </Button>
      ) : (
        <Button type="submit">
          <Typography color="primary" variant="caption">
            {text}
          </Typography>
        </Button>
      )}
    </Grid>
  );
};

export default BasketFinalizeBox;
