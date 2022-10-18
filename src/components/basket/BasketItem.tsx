import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { dataContext } from "../../ContextProvider";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ProductSnackBar from "../products/ProductSnackBar";
import { basketItemInterface } from "../../interfaces/basketItemInterface";
import { useContext } from "react";
import reduceBasketItemQuant from "../../utils/componentsFunctions/reduceBasketItemQuant";
import increaseBasketItemQuant from "../../utils/componentsFunctions/increaseBasketItemQuant";
import deleteBasketItem from "../../utils/componentsFunctions/deleteBasketItem";

const BasketItem = ({ item }: basketItemInterface) => {
  const { basketData, setBasketData, setOpen } = useContext(dataContext);

  return (
    <Card
      data-testid="basketItem"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "37.5rem",
        minWidth: "31.25rem",
      }}
    >
      <Grid
        sx={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Grid
          sx={{
            alignItems: "center",
            flexDirection: "row",
            width: "6.25rem",
          }}
        >
          <CardMedia
            component="img"
            height="100"
            image={item.imgUrl}
            alt="green iguana"
          />
        </Grid>

        <CardContent>
          <Typography color="primary" variant="caption">
            {item.name}
          </Typography>
          <Typography variant="h5" color="primary">
            price: {item.price}$
          </Typography>
        </CardContent>
      </Grid>

      <Grid
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <IconButton
          data-testid="reduceButton"
          onClick={() => {
            setBasketData(
              reduceBasketItemQuant(item.id, basketData).basketData
            );
          }}
          color="primary"
        >
          <RemoveShoppingCartOutlinedIcon fontSize="large" />
        </IconButton>
        <Typography variant="h5" color="primary">
          quant: {item.quantity}
        </Typography>
        <IconButton
          data-testid="increaseButton"
          onClick={() => {
            setBasketData(
              increaseBasketItemQuant(item.id, basketData).basketData
            );
          }}
          color="primary"
        >
          <AddShoppingCartOutlinedIcon fontSize="large" />
        </IconButton>
        <IconButton
          data-testid="deleteButton"
          onClick={() => {
            const placeholder = deleteBasketItem(item.id, basketData);
            setOpen(placeholder.isOpen);
            setBasketData(placeholder.basketData);
          }}
          color="primary"
        >
          <DeleteForeverOutlinedIcon fontSize="large" />
        </IconButton>
        <ProductSnackBar text="Product deleted from the basket" />
      </Grid>
    </Card>
  );
};
export default BasketItem;
