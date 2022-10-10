import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardMedia,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { productType } from "../../types/productType";
import ProductSnackBar from "./ProductSnackBar";
import { colors } from "../../utils/helpers";

const ProductItem = ({
  item,
  addToBasket,
}: {
  item: productType;
  addToBasket: (item: string) => void;
}) => {
  return (
    <Card
      sx={{
        minWidth: 150,
        width: 230,
        bgcolor: colors[item.category],
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image="https://images.unsplash.com/photo-1515471897120-85416077e011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwYmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="green iguana"
      />
      <CardContent>
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "row",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography color="primary" variant="caption">
              {item.name}
            </Typography>
            <Typography variant="h5" color="primary">
              {item.price}$
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "flex-end",
              alignSelf: "flex-end",
              flexDirection: "column",
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
