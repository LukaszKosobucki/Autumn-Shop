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
import addItemToBasket from "../../utils/componentsFunctions/addItemToBasket";

const ProductItem = ({ item }: productItemInterface) => {
  const { basketData, setBasketData, setOpen } = useContext(dataContext);

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
              placeholder="buttonAddToBasket"
              onClick={() => {
                setBasketData(addItemToBasket(item.id, basketData).basketData);
                setOpen(addItemToBasket(item.id, basketData).isOpen);
              }}
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
