import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardMedia,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductSnackBar from "./ProductSnackBar";
import { colors } from "../../utils/constants/helpers";
import { productItemInterface } from "../../interfaces/productItemInterface";
import { dataContext } from "../../ContextProvider";
import { useContext } from "react";
import { basketType } from "../../types/basketType";

const ProductItem = ({ item }: productItemInterface) => {
  const { basketData, setBasketData, setOpen } = useContext(dataContext);
  const addToBasket = (item: string) => {
    if (basketData.some((e: basketType) => e.id === item)) {
      const index = basketData.findIndex((e: basketType) => e.id === item);
      const newBasketData = basketData;
      newBasketData[index].quantity += 1;
      setBasketData([...newBasketData]);
    } else {
      setBasketData((basketData: basketType[]) => [
        ...basketData,
        { id: item, quantity: 1 },
      ]);
    }
    setOpen(true);
    localStorage.setItem("basketData", JSON.stringify(basketData));
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flext-start",
        alignItems: "space-between",
        flexDirection: "column",
        minWidth: "9.375rem",
        width: "14.375rem",
        bgcolor: colors[item.category],
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={item.imgUrl}
        alt="green iguana"
      />
      <CardContent>
        <Grid
          sx={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Grid>
            <Typography color="primary" variant="caption">
              {item.name}
            </Typography>
            <Typography variant="h5" color="primary">
              {item.price}$
            </Typography>
          </Grid>
          <Grid
            sx={{
              flexWrap: "nowrap",
              justifyContent: "flex-end",
              alignSelf: "flex-end",
            }}
          >
            <IconButton
              aria-label="delete"
              onClick={() => addToBasket(item.id)}
              color="primary"
            >
              <ShoppingCartIcon />
            </IconButton>

            <ProductSnackBar text="Product added to the basket" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
