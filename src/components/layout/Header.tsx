import { Box, Typography, IconButton } from "@mui/material";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListIcon from "@mui/icons-material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        px: 10,
        py: 0,
        bgcolor: "#f2cc8f",
        justifyContent: "space-around",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 2,
      }}
    >
      <Box>
        <IconButton
          color="primary"
          component={Link}
          to="/"
          onClick={() =>
            window.location.href === "http://localhost:3005/"
              ? window.location.reload()
              : null
          }
        >
          <EmojiFoodBeverageIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box>
        <Typography variant="h2" color="primary">
          Jesieniara-ecommerce
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Box>
          <IconButton color="primary">
            <AccountBoxIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box>
          <IconButton color="primary" component={Link} to="/order-list">
            <ListIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box>
          <IconButton color="primary" component={Link} to="/basket">
            <ShoppingCartIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
