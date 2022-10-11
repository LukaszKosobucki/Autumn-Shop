import { Grid, Typography, IconButton, Box, Badge } from "@mui/material";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListIcon from "@mui/icons-material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import styles from "../../palette.module.scss";
import { useContext } from "react";
import { dataContext } from "../../ContextProvider";

const Header = () => {
  const { basketData } = useContext(dataContext);
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
      <Box sx={{ display: "flex", flex: 1, justifyContent: "center" }}>
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
      <Box sx={{ justifyContent: "center" }}>
        <Typography variant="h2" color="primary">
          Jesieniara-ecommerce
        </Typography>
      </Box>
      <Grid
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flex: 1,
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
            <Badge badgeContent={basketData.length} color="primary">
              <ShoppingCartIcon fontSize="large" />
            </Badge>
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Header;
