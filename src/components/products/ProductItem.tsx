import { Card, CardContent, Grid, Typography, CardMedia } from "@mui/material";
import { productInterface } from "../../interfaces/productInterface";

const ProductItem = ({ props }: productInterface) => {
  return (
    <Grid item xs>
      <Card>
        <CardMedia
          component="img"
          height="140"
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
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductItem;
