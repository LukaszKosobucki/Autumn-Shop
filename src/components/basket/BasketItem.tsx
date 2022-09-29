import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
const BasketItem = ({
  item,
  reduceBasketItemQuant,
  increaseBasketItemQuant,
}: any) => {
  return (
    <Card sx={{ m: 0.5 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: " wrap",
          color: "#3d405b",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: 700,
          minWidth: 500,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            color: "#3d405b",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              flexWrap: "wrap",
              color: "#3d405b",
              justifyContent: "flex-start",
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
          </Box>

          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {item.name}
            </Typography>
            <Typography variant="h6" component="div">
              price: {item.price}$
            </Typography>
          </CardContent>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            color: "#3d405b",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <IconButton
            onClick={() => {
              reduceBasketItemQuant(item.id);
            }}
          >
            <RemoveShoppingCartOutlinedIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" component="span">
            {item.quantity}
          </Typography>
          <IconButton
            onClick={() => {
              increaseBasketItemQuant(item.id);
            }}
          >
            <AddShoppingCartOutlinedIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};
export default BasketItem;
