import Footer from "./Footer";
import Header from "./Header";
import { Grid, Box } from "@mui/material";
import { childrenInterface } from "../../interfaces/childrenInterface";
import colors from "../../palette.module.scss";

const MainLayout = ({ children }: childrenInterface) => {
  return (
    <Box component="main">
      <Header />
      <Grid
        sx={{
          justifyContent: "center",
          alignItems: "center",
          bgcolor: colors.colorAutumnLight50,
          minHeight: "100vh",
          minWidth: "100%",
          margin: 0,
          overflowX: "clip",
        }}
      >
        {children}
      </Grid>

      <Footer />
    </Box>
  );
};

export default MainLayout;
