import { Grid, Typography, IconButton, Box } from "@mui/material";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListIcon from "@mui/icons-material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import styles from "../../palette.module.scss";

const Header = () => {
  return (
    <Grid
      sx={{
        bgcolor: styles.colorAutumnDawnAutumnDawn,
        justifyContent: "space-around",
        alignItems: "center",
        position: "sticky",
        flexDirection: "row",
        top: 0,
        zIndex: 2,
        mb: 0,
      }}
    >
      <Box>
        <IconButton
          color="primary"
          component={Link}
          to="/"
          onClick={() =>
            window.location.href === "http://localhost:3005/" &&
            window.location.reload()
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
      <Grid
        sx={{
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
      </Grid>
    </Grid>
  );
};
export default Header;
