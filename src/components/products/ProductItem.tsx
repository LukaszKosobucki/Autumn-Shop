import {
  Card,
  CardContent,
  Box,
  Typography,
  CardMedia,
  IconButton,
} from "@mui/material";
import { productInterface } from "../../interfaces/productInterface";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const ProductItem = ({ props }: productInterface) => {
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <Card>
        <CardMedia
          component="img"
          height="250"
          image="https://images.unsplash.com/photo-1515471897120-85416077e011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwYmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.name}
          </Typography>
          <Typography variant="h5" component="div">
            {props.price}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.category}
          </Typography>
          <IconButton aria-label="delete">
            <ShoppingCartIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductItem;
