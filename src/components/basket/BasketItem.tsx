import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ProductSnackBar from "../products/ProductSnackBar";
import { basketItemInterface } from "../../interfaces/basketItemInterface";

const BasketItem = ({
  item,
  reduceBasketItemQuant,
  increaseBasketItemQuant,
  deleteBasketItem,
}: basketItemInterface) => {
  return (
    <Card>
      <Grid
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: 600,
          minWidth: 500,
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
              width: 100,
            }}
          >
            <CardMedia
              component="img"
              height="100"
              image="https://images.unsplash.com/photo-1515471897120-85416077e011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwYmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
              reduceBasketItemQuant(item.id);
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
              increaseBasketItemQuant(item.id);
            }}
            color="primary"
          >
            <AddShoppingCartOutlinedIcon fontSize="large" />
          </IconButton>
          <IconButton
            onClick={() => {
              deleteBasketItem(item.id);
            }}
            color="primary"
          >
            <DeleteForeverOutlinedIcon fontSize="large" />
          </IconButton>
          <ProductSnackBar text="Product deleted from the basket" />
        </Grid>
      </Grid>
    </Card>
  );
};
export default BasketItem;
