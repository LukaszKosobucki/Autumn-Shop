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
import reduceBasketItemQuant from "../../utils/reduceBasketItemQuant";
import increaseBasketItemQuant from "../../utils/increaseBasketItemQuant";
import deleteBasketItem from "../../utils/deleteBasketItem";

const BasketItem = ({ item }: basketItemInterface) => {
  const { basketData, setBasketData, setOpen } = useContext(dataContext);

  return (
    <Card
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
          onClick={() => {
            setBasketData(
              reduceBasketItemQuant(item.id, basketData).setbasketdata
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
          onClick={() => {
            setBasketData(
              increaseBasketItemQuant(item.id, basketData).setbasketdata
            );
          }}
          color="primary"
        >
          <AddShoppingCartOutlinedIcon fontSize="large" />
        </IconButton>
        <IconButton
          onClick={() => {
            setOpen(deleteBasketItem(item.id, basketData).setopen);
            setBasketData(deleteBasketItem(item.id, basketData).setbasketdata);
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
