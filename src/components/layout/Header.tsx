import { Box, Typography, IconButton, Grid } from "@mui/material";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListIcon from "@mui/icons-material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        px: 10,
        py: 0,
        bgcolor: "#f2cc8f",
        color: "#3d405b",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box>
        <IconButton sx={{ color: "#3d405b" }}>
          <EmojiFoodBeverageIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box>
        <Typography variant="h2">Jesieniara-ecommerce</Typography>
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
          <IconButton sx={{ color: "#3d405b" }}>
            <AccountBoxIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box>
          <IconButton sx={{ color: "#3d405b" }}>
            <ListIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box>
          <IconButton sx={{ color: "#3d405b" }}>
            <ShoppingCartIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
